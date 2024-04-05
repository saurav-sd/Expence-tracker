import "./App.css";
import { AddTransaction } from "./Components/AddTransaction";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { IncomeExpence } from "./Components/IncomeExpence";
import { Transactions } from "./Components/TransactionsList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
        </div>
        <IncomeExpence />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
