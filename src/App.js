import { useState } from "react";
import Expense from "./components/Expensive/Exprnsive";
import NewExpensive from "./components/NewExpensiv/NewExpensive";
const expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [data, setData] = useState(expense);
  function onReceiveDataFromNew(dataFromNew) {
    setData((previousData) => {
      return [dataFromNew, ...previousData];
    });
  }
  return (
    <div>
      <NewExpensive DataFromNew={onReceiveDataFromNew} />
      
      <Expense expense={data} />
    </div>
  );
}
export default App;
