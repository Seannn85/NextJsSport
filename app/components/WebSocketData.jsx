"use client"
import { useEffect, useState } from 'react';

export default function StockData() {
  const [latestPrice, setLatestPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [priceChangeColor, setPriceChangeColor] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection to the API server
    // const socket = new WebSocket("wss://ws.finnhub.io?token=ck4avjhr01qus81pt9dgck4avjhr01qus81pt9e0");
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.NEXT_PUBLIC_WEBSOCKET_TOKEN}`);

    // Handle WebSocket open event
    socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }));
      //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }));
      //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }));
      });

    // Handle incoming data from the WebSocket
    socket.addEventListener('message', (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData)
        // Check if the data is an array with at least one element
        if (Array.isArray(parsedData.data) && parsedData.data.length > 0) {
          const newPrice = parsedData.data[0].p; // Assuming the API response structure

          // Check if there's a previous price to compare with
          if (latestPrice !== null) {
            // Calculate price change percentage
            const priceChange = latestPrice - newPrice;

            // Determine the color based on price change
            const colorClass = priceChange > 0 ? 'text-green-500' : priceChange < 0 ? 'text-red-500' : 'text-gray-500';

            // Update state with the new prices and color
            setLatestPrice(newPrice);
            setPreviousPrice(latestPrice);
            setPriceChangeColor(colorClass);
          } else {
            // Set the initial price
            setLatestPrice(newPrice);
          }
        }
      } catch (error) {
        console.log('WebSocket data parse error:', error);
      }
    });

    // // Handle WebSocket error event
    // socket.on('error', (error) => {
    //   console.log('WebSocket connection error:', error);
    // });

    // // Clean up the WebSocket connection when component unmounts
    // return () => {
    //   socket.close();
    // };
  }, [latestPrice]);

  return (
    <div>
      <h1>Stock Data for XNYS</h1>
      <p>Latest Price: {latestPrice}</p>
      <p className={priceChangeColor}>
        Price Change: {latestPrice !== null && previousPrice !== null ? previousPrice - latestPrice : 0}
      </p>
    </div>
  );
}
