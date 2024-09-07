import React, { useEffect, useState } from "react";
import stockService from "../../utils/controllers/stockServices";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigate = useNavigate();
  const [ticker, setTickers] = useState([]);

  const fetchAllTickers = async () => {
    try {
      const resp = await stockService.fetchTickers();
      if (resp && resp.data) {
        setTickers(resp.data);
      }
      console.log("consoleCheck", resp);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchAllTickers();
  }, []);
  return (
    <div className="grid grid-cols-10 gap-[1rem]">
      {ticker &&
        ticker.map((v, i) => {
          return (
            <div
              key={i}
              className="w-fit cursor-pointer text-[1.1rem] font-[500] border-b-[2px] border-transparent hover:border-black hover:text-black transition-all duration-400 px-[0.3rem]"
              onClick={() => navigate(`/stock/${v}`)}
            >
              {v}
            </div>
          );
        })}
    </div>
  );
};

export default Listing;
