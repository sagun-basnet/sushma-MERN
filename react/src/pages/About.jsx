import React from "react";
import Card from "../components/Card";

const About = () => {
  const data = [
    {
      name: "Jhon",
      age: 34,
      email: "jhon@gmail.com",
    },
    {
      name: "Jhon",
      age: 34,
      email: "jhon@gmail.com",
    },
    {
      name: "Jhon",
      age: 34,
      email: "jhon@gmail.com",
    },
    {
      name: "Jhon",
      age: 34,
      email: "jhon@gmail.com",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3">
        {data.map((item, index) => {
          return (
            <Card
              name={item.name}
              age={item.age}
              email={item.email}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
