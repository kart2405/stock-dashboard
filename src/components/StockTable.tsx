import React from 'react';

interface Stock {
  symbol: string;
  price: number;
  changePercent: number;
}

interface StockTableProps {
  stocks: Stock[];
}

const StockTable: React.FC<StockTableProps> = ({ stocks }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Change %
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {stock.symbol}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${stock.price.toFixed(2)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
