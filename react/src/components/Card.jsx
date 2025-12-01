import React from "react";

const Card = ({ name, age, email, index }) => {
  return (
    <div className="h-[20rem] w-[20rem] border-2" key={index}>
      <h1 className="text-xl font-bold">{name}</h1>
      <span>{age}</span>
      <h2 className="text-lg">{email}</h2>
    </div>
  );
};

export default Card;
