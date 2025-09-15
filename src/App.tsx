import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import StockTable from './components/StockTable';

interface Stock {
  symbol: string;
  price: number;
  changePercent: number;
}

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        setLoading(true);
        setError(null);

        // For demo purposes, we'll use mock data since we don't have a real API key yet
        // In a real implementation, you would replace this with actual API calls
        // Example: const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data that simulates real API response
        const mockStocks: Stock[] = [
          { symbol: 'AAPL', price: 150.25, changePercent: 2.34 },
          { symbol: 'GOOGL', price: 2750.80, changePercent: -1.45 },
          { symbol: 'MSFT', price: 320.15, changePercent: 0.89 },
          { symbol: 'TSLA', price: 245.67, changePercent: -3.21 },
          { symbol: 'AMZN', price: 3125.43, changePercent: 1.78 },
        ];

        setStocks(mockStocks);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stock data. Please try again later.');
        setLoading(false);
        console.error('Error fetching stock data:', err);
      }
    };

    fetchStockData();
  }, []);

  // Filter stocks based on search term
  const filteredStocks = stocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Input */}
        <div className="mb-6">
          <div className="max-w-md">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search stocks
            </label>
            <input
              type="text"
              id="search"
              placeholder="Enter stock symbol (e.g., AAPL)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-lg text-gray-600">Loading stock data...</div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">{error}</div>
              </div>
            </div>
          </div>
        )}
        
        {!loading && !error && (
          <>
            {filteredStocks.length === 0 && searchTerm ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No stocks found matching "{searchTerm}"</p>
              </div>
            ) : (
              <StockTable stocks={filteredStocks} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
