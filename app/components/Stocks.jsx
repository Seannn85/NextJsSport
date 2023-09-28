import Image from "next/image";
const Stocks = ({ stockname, stockprice }) => {
  return (
    <div className="flex text-sm font-roboto m-4 w-48 h-12 border border-slate-200 p-2 rounded-md items-center">
      <div className="flex w-10 h-10 bg-red-100 rounded-md p-2 items-center justify-center">
        <Image width={20} height={20} src="/arrowDownForStock.svg" alt="icon" />
      </div>

      <div className="pl-2">
        <div className="text-black text-xs font-bold truncate w-15">
          {stockname}
        </div>

        <div className="text-slate-500 text-xs">{stockprice}</div>
      </div>

      <div className="pl-6">
        <div className="text-red-500 text-xs">-0.39%</div>

        <div className="text-red-400 text-xs">-61.50</div>
      </div>
    </div>
  );
};

export default Stocks;

// import Image from "next/image";

// const Stocks = ({ stockname, stockprice }) => {
//   return (
//     <div className="flex items-center w-64 h-16 border border-slate-200 p-2 rounded-md">
//       <div className="w-6 h-6">
//         <Image width={24} height={24} src="/arrowDownForStock.svg" alt="icon" />
//       </div>

//       <div className="flex-grow pl-2">
//         <div className="font-bold">{stockname}</div>
//         <div className="text-slate-500">{stockprice}</div>
//       </div>

//       <div className="pl-6 flex flex-col items-end">
//         <div className="text-red-500">-0.39%</div>
//         <div className="text-red-400">-61.50</div>
//       </div>
//     </div>
//   );
// };

// export default Stocks;
