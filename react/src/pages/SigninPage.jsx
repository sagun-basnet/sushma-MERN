import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const SigninPage = () => {
  const navigate = useNavigate();
  const { login, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const init = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    // console.log(e);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username === "") {
      return alert("Enter Username...");
    }
    if (formData.password.length < 6) {
      return alert("Password should be of 8 char..");
    }

    const res = await login(formData);
    console.log(res, ":LOGIN RES");

    setFormData(init);
    navigate("/");
  };

  return (
    <div className="h-screen w-full grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-12 shadow-2xl rounded-xl w-96"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Enter Username"
          className="border-2 rounded-md p-2 font-bold w-full"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter password"
          className="border-2 rounded-md p-2 font-bold w-full"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="p-2 px-4 font-bold rounded-md bg-blue-700 cursor-pointer text-white"
        />
        <Link to="/signup">
          <span className="text-blue-600 underline cursor-pointer">
            New user?Register.
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SigninPage;
