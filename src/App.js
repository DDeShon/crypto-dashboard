import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRate from "./components/ExchangeRate";

const App = () => {
  return (
    <div className="app">
      <NewsFeed />
      <CurrencyConverter />
      <ExchangeRate />
    </div>
  );
};

export default App;
