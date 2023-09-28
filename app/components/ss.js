useEffect(() => {
    // Create a WebSocket connection to the API server
    const socket = new WebSocket(`wss://ws.finnhub.io?token=ck4avjhr01qus81pt9dgck4avjhr01qus81pt9e0`);

    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'AAPL' }));
    //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'BINANCE:BTCUSDT' }));
    //   socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'IC MARKETS:1' }));
    });

    socket.addEventListener('message', function (event) {
      try {
        const data = JSON.parse(event.data);
        setStocks(data);

    //     if (Array.isArray(data.data) && data.data.length > 0) {
    // const newPrice = data.data[0].p
    //     }
      } catch (error) {
        console.log('WebSocket data parse error:', error);
      }
    });
  }, [latestPrice]);