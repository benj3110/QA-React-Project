import React from "react";
import Movies from "../Data/MovieDoc.json";

const DataTest = () => {
  console.log(Movies)
  return <p> {JSON.stringify(Movies)} </p>;
};

export default DataTest;
