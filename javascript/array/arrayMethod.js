// 1. Write a function that filters out even numbers from an array. 
let arr = [1, 2, 3, 4, 5,,6,7, 10, 20];
const filterEvenArr = arr.filter((item) => {
  return item%2==0
  
});
console.log(filterEvenArr);


// 2. Filter an array to include only odd numbers. 
let arr2 = [1, 2, 3, 4, 5,,6,7, 10, 20];

const filterOddArr = arr2.filter((item) => {
  return item%2!=0
  
});
console.log(filterOddArr);


// 3. Given an array of strings, filter out strings that have more than 3 characters. 
let strArr=['p','wxyz','ab','abcd']
const filterStrArr = strArr.filter((item) => {
  return item.length>3
  
});
console.log(filterStrArr);

// 4. Write a function that filters out negative numbers from an array. 
let arr4 = [1, 2, 3, 4, 5,,6,7, -10, -20];

const filterNeg = arr4.filter((item) => {
  return item<0
  
});
console.log(filterNeg);

// 5. Given an array of boolean values, filter out the `true` values. 
const arr5 = [true, false, true, false, false, true];
let trueArr=arr5.filter((item)=>{
  return item==true
})
console.log(trueArr)

// 6. Filter an array of strings to include only those that contain the letter 'a'. 
let arr6=['p','wxyz','ab','abcd']
const aArr = arr6.filter((item) => {
  return item.includes('a')
  
});
console.log(aArr);

// 7. Filter an array of numbers to return only those greater than 5. 
let arr7 = [1, 2, 3, 4, 5,,6,7, 10, 20];

const grater5= arr7.filter((item) => {
  return item>5
  
});
console.log(grater5);


// 8. Write a function that filters out empty strings from an array. 



// 9. Write a function that maps an array of numbers to an array where each number is doubled. 

