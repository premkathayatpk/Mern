import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //get ME
  const getMe = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/getMe`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMe();
  }, []);

  //Login user
  const loginUser = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        await getMe();
        alert("User logged in successfully!");
        setUser(data.user);
        return true;
      } else {
        alert("Failed to log in user: " + data.message);
        return false;
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      return false;
    }
  };

  //logout user
  const logout = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        alert("Logged out successfully");
        setUser(null);
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, logout, getMe, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
