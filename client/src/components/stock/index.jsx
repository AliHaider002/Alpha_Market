import React from "react";
import { useParams } from "react-router-dom";

const StockCom = () => {
  const { id } = useParams();
  return <div>StockCom {id}</div>;
};

export default StockCom;
