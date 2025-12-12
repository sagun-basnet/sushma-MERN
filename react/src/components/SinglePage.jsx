import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const fetchData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <h1 className="">{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
};

export default SinglePage;
