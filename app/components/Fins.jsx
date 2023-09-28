"use client"

import { useEffect, useState } from 'react';

export default function StockData() {
  const [latestPrice, setLatestPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [priceChangeColor, setPriceChangeColor] = useState(null);
  const [priceChangePercentage, setPriceChangePercentage] = useState(null);


  useEffect(() => {
    // Create a WebSocket connection to the API server
    const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_TOKEN);

    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'DJIA' }));
    //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }));
    //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }));
    });

    socket.addEventListener('message', function (event) {
      try {
        const data = JSON.parse(event.data);

        if (Array.isArray(data.data) && data.data.length > 0) {
    const newPrice = data.data[0].p

          if (latestPrice !== null) {
            const priceChange = newPrice - latestPrice;
            const colorClass = priceChange > 0 ? 'text-green-500' : priceChange < 0 ? 'text-red-500' : 'text-gray-500';
            const percentageChange = ((priceChange / latestPrice) * 100).toFixed(3);

            setLatestPrice(newPrice);
            setPreviousPrice(latestPrice);
            setPriceChangeColor(colorClass);
            setPriceChangePercentage(percentageChange);
          } else {
            setLatestPrice(newPrice);
          }
        }
      } catch (error) {
        console.log('WebSocket data parse error:', error);
      }
    });

    // socket.onerror = (error) => {
    //   console.log('WebSocket connection error:', error);
    // };

   
    // return () => {
    //   socket.close();
    // };
  }, [latestPrice]);

  return (
    <div>
      <h1>Stock Data for AAPL</h1>
      <p>Latest Price: {latestPrice}</p>
      <p className={priceChangeColor}>
        {priceChangePercentage !== null && (
          <span>
            {priceChangePercentage > 0 ? (
              <span className="text-green-500">&#9650; {priceChangePercentage}%</span>
            ) : priceChangePercentage < 0 ? (
              <span className="text-red-500">&#9660; {Math.abs(priceChangePercentage)}%</span>
            ) : (
              <span className="text-gray-500">No change</span>
            )}
          </span>
        )}
      </p>
    </div>
  );
}




// import { useEffect, useState } from 'react';

// export default function StockData() {
//   const [latestPrice, setLatestPrice] = useState(null);


//   useEffect(() => {
//     // Create a WebSocket connection to the API server
//     const socket = new WebSocket('wss://ws.finnhub.io?token=ck4avjhr01qus81pt9dgck4avjhr01qus81pt9e0');

//     socket.addEventListener('open', function (event) {
//       // Subscribe to the WebSocket connection
//       socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }));
//     });

//     socket.addEventListener('message', function (event) {
//       try {
//         const data = JSON.parse(event.data);
        
//         // const promise = new Promise((resolve) => {setTimeout(() => resolve(), 10000)});

//         console.log(data.data[0].p);

//         const newPrice = data.data[0].p
//         setLatestPrice(newPrice);


//         // if(data) {
//         //     const newPrice = data[0].p;
//         //     console.log(newPrice)

//         // }
//         // if (Array.isArray(data) && data.length > 0) {
//         //   const newPrice = data[0].p;

//         //   console.log(newPrice)
//         //   // Update the latest price state variable
//         //   setLatestPrice(newPrice);
//         // }
//       } catch (error) {
//         console.log('WebSocket data parse error:', error);
//       }
//     });

//     socket.onerror = (error) => {
//       console.log('WebSocket connection error:', error);
//     };

//     // Set a timer to disconnect after 10 seconds
//     // const disconnectTimer = setTimeout(() => {
//     //   socket.close();
//     // }, 10000); // 10 seconds

//     // // Clear the timer when the component unmounts
//     // return () => {
//     //   clearTimeout(disconnectTimer);
//     //   socket.close();
//     // };
//   }, []);

//   return (
//     <div>
//       <h1>Stock Data for AAPL</h1>
//       <p>Latest Price: {latestPrice}</p>
//     </div>
//   );
// }
