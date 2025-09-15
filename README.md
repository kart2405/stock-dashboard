# Stock Price Dashboard

A modern, responsive stock price dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Real-time stock price display
- 🔍 Search functionality to filter stocks by symbol
- 📈 Color-coded percentage changes (green for gains, red for losses)
- ⚡ Loading states and error handling
- 📱 Responsive design with Tailwind CSS
- 🎯 TypeScript for type safety

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js (version 14.18.0 or higher) - **Note**: Current Node.js 14.16.0 has compatibility issues
- npm

### Installation & Running

#### Option 1: Quick Demo (Recommended for Node.js 14.16.0)
Simply open the demo file in your browser:
```bash
open demo.html
```
This runs a standalone version with CDN dependencies - no build process required!

#### Option 2: Python HTTP Server
```bash
cd stock-dashboard
python3 -m http.server 8080
```
Then open `http://localhost:8080/demo.html` in your browser.

#### Option 3: Full Development Setup (Requires Node.js 14.18.0+)
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd stock-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Header component
│   └── StockTable.tsx      # Stock table component
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles with Tailwind
```

## API Integration

The application is currently using mock data for demonstration purposes. To integrate with a real stock API:

1. Get an API key from [Finnhub](https://finnhub.io/) or [Alpha Vantage](https://www.alphavantage.co/)
2. Replace the mock data in `App.tsx` with actual API calls
3. Update the environment variables for your API key

Example API integration:
```typescript
const response = await axios.get(
  `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
);
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Implemented

✅ **Phase 1**: Project setup with Vite + TypeScript + Tailwind CSS  
✅ **Phase 2**: Component scaffolding (Header, StockTable)  
✅ **Phase 3**: Data fetching with useState and useEffect  
✅ **Phase 4**: Data display with percentage calculations  
✅ **Phase 5**: Professional styling with Tailwind CSS  
✅ **Phase 6**: Search functionality and error handling  

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
# stock-dashboard
