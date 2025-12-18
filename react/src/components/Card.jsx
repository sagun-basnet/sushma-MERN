import axios from "axios";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const Card = ({ title, price, description, category, image, id }) => {
  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Item deleted..");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div
      className="h-[30rem] w-[22rem]  p-2 rounded-lg shadow-xl hover:border-[1px] hover:border-gray-200 hover:shadow-2xl cursor-pointer transition-shadow delay-75"
      key={id}
    >
      <div className="h-1/2 w-full">
        <img src={image} alt="product image" className="w-full h-full" />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h1 className="text-xl font-bold text-center">
          {title.slice(0, 15)}...
        </h1>
        <h2 className="text-lg font-bold text-green-700">Price: Rs. {price}</h2>
        <span className="text-justify">{description.slice(0, 65)}...</span>
        <span className="font-bold">Category: {category}</span>
      </div>
      <div className="flex justify-between px-18">
        <button
          onClick={() => handleDelete(id)}
          className="p-2 px-4 bg-red-600 cursor-pointer rounded-md"
        >
          <BiTrash className="text-xl text-white" />
        </button>
        <button className="p-2 px-4 bg-blue-600 cursor-pointer rounded-md">
          <CiEdit className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Card;
