"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import StockSummary from "./StockSummary";
import { showData,fetchIexData } from "../_actions/action";



const Header =  () => {
  const [stocks, setStocks] = useState();

 

useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const data = await fetchIexData();
        // const data = await showData("Europe");
        setStocks(data); // Set the fetched data in the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []);





  const eventHandler = async (e) => {
    e.preventDefault();

    const data = await showData(e.target.name);
    setStocks(data);
  };

  const headerItems = [
    {
      label: "US",
      href: "/us",
    },
    {
      label: "Europe",
      href: "/europe",
    },
    {
      label: "Asia",
      href: "/asia",
    },
    {
      label: "Currencies",
      href: "/currencies",
    },
    {
      label: "Crypto",
      href: "/crypto",
    },
    {
      label: "Futures",
      href: "/futures",
    },
  ];

  return (
    <div>
      <div className="flex items-center max-w-6xl justify-start gap-10 font-roboto text-sm text-slate-700">
        <div className="flex gap-4 items-center">
          <div>
            <Image width={12} height={12} src="/arrowUP.svg" alt="Menu icon" />
            <Image
              width={12}
              height={12}
              src="/arrowDown.svg"
              alt="Menu icon"
            />
          </div>

          <div className="text-xs">
            <button className={`px-4 py-2 text-slate-700 rounded-lg`}>
              COMPARE MARKETS
            </button>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-10">
            {headerItems.map((link, index) => (
              <li key={index}>
                <button
                  name={`${link.label}`}
                  id={`${link.label}`}
                  className={` p-2 text-slate-700 rounded-lg`}
                  onClick={eventHandler}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
    <StockSummary stocks={stocks} />
      </div>
    </div>
  );
};

export default Header;
