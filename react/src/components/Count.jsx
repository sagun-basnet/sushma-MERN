import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Count = () => {
  const [count, setCount] = useState(true);
  const handleClick = (a) => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <button
        onClick={() => handleClick(3)}
        className="p-2 px-4 bg-blue-600 rounded-md "
      >
        Add
      </button>
      <span>{count}</span>
      <IoIosCloseCircle/>
    </div>
  );
};

export default Count;
