import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("appToken");
  const fetchApi = async () => {
    await axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      {data.map((item, index) => {
        return (
          <Card
            title={item.title}
            image={item.image}
            category={item.category}
            description={item.description}
            price={item.price}
            id={item.id}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
