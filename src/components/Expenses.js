import ExpenseItem from "./ExpenseItem";
function Expenses(prop){
return(
    <div className="expenses">
      <ExpenseItem title={prop.items[0].title} date={prop.items[0].date} amount={prop.items[0].amount}></ExpenseItem>
      <ExpenseItem title={prop.items[1].title} date={prop.items[1].date} amount={prop.items[1].amount}></ExpenseItem>
      <ExpenseItem title={prop.items[2].title} date={prop.items[2].date} amount={prop.items[2].amount}></ExpenseItem>
    </div>
)
}

export default Expenses;