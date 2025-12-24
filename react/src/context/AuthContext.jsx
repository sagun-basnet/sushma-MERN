import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const user = {
    name: "jhon",
    age: 19,
    email: "jhon@gmail.com",
  };
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    console.log(inputs);
    try {
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        inputs
      );
      setCurrentUser(user);

      return res;
    } catch (err) {
      console.log(err);
      toast.error("Username or Password is incorrect");
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
