import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res);

    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {data.map((item, index) => {
          return (
            <Link to={`/post/${item.id}`}>
              <div className=" border-2 p-2 cursor-pointer" key={index}>
                <h1 className="text-2xl font-bold text-center">{item.title}</h1>
                <p className="text-lg">{item.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default API;
