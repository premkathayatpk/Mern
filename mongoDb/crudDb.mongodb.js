// create db
use("crudDb");

//create collection
db.createCollection("courses");

// //insert single data
db.courses.insertOne({
  name: "Web dev",
  price: 1000,
  assignment: 12,
  project: 10,
});

// // insert multiple data
db.courses.insertMany([
  {
    name: "Full-Stack MERN Development",
    price: 1200,
    assignment: 15,
    project: 8,
  },
  {
    name: "Next.js & Tailwind CSS Masterclass",
    price: 850,
    assignment: 10,
    project: 6,
  },
  {
    name: "Backend Engineering with Node & Express",
    price: 950,
    assignment: 14,
    project: 7,
  },
  {
    name: "Advanced React and State Management",
    price: 700,
    assignment: 8,
    project: 5,
  },
  {
    name: "Python Django REST Framework",
    price: 1100,
    assignment: 13,
    project: 9,
  },
  {
    name: "UI/UX Design Fundamentals for Devs",
    price: 500,
    assignment: 6,
    project: 4,
  },
  {
    name: "DevOps & Cloud Deployment Basics",
    price: 1350,
    assignment: 11,
    project: 10,
  },
  {
    name: "Data Structures & Algorithms in Java",
    price: 900,
    assignment: 20,
    project: 3,
  },
  {
    name: "TypeScript Deep Dive",
    price: 650,
    assignment: 9,
    project: 5,
  },
  {
    name: "Database Design & SQL Optimization",
    price: 800,
    assignment: 12,
    project: 6,
  },
]);

// //find match data
db.courses.find({ price: 1000 });

// //count match data
let a = db.courses.find({ price: 1000 });
console.log(a.count());
console.log(a.toArray());

// //find single match data
db.courses.findOne({ price: 1000 });

//Update
// update first match data
db.courses.updateOne({ price: 1000 }, { $set: { price: 2000 } });

// //update all match data
db.courses.updateMany({ price: 1000 }, { $set: { price: 2000 } });

//Delete
db.courses.deleteOne({ price: 2000 });
db.courses.deleteMany({ price: 2000 });
