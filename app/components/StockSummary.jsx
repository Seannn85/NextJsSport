"use client";
import Stocks from "./Stocks";
import { experimental_useOptimistic as useOptimistic } from "react";
// import { useState,useEffect } from "react";
// import { fetchIexData } from "../_actions/action";



const StockSummary = ({ stocks }) => {

    // const [stock,setStock]=useState()


    // useEffect(()=>{

    //     const getActualData=
    //     const data = fetchIexData();
    //     setStock(data);

    // },[])
  
  if (!stocks) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <ul>
        <li className="flex items-center">
      {stocks.map((stock,index) => (
            <Stocks
              key={index}
              stockname={stock.companyName}
              stockprice={stock.iexClose}
            />
          )) }
        </li>
      </ul>
    </div>

    // <div className="flex text-sm font-roboto m-4 max-w-fit border border-slate-200 p-2 rounded-md items-center">
    //   <div className="inline-block bg-red-100 rounded-md p-2 items-center">
    //     <Image width={24} height={24} src="/arrowDownForStock.svg" alt="icon" />
    //   </div>

    //   <div className="pl-2">
    //     <div className="text-black font-bold">DAX</div>

    //     <div className="text-slate-500">15,604.03</div>
    //   </div>

    //   <div className="pl-6">
    //     <div className="text-red-500">-0.39%</div>

    //     <div className="text-red-400">-61.50</div>
    //   </div>
    // </div>
  );
};

export default StockSummary;
