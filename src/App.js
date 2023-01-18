import Expenses from "./components/Expenses";
function App() {
  const expenseItems = [{
    title:"Haracz dla państwa",
    date: new Date(21,10,5),
    amount: 10
  },
  {
    title:"Czynsz",
    date: new Date(22,2,28),
    amount: 124
  },
  {
    title:"Nic nie robienie",
    date: new Date(),
    amount: 25
  }];
  return (
    <div>
      <div><Expenses items={expenseItems}></Expenses></div>
    </div>
  )
}

export default App;
