import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpensesList.css'

export default function ExpensesList(props) {

   if (props.items.length === 0) {
      return (<h2 className="expenses-list__fallback">No Expense found!</h2>)
   }

   return (
      <ul className="expenses-list">
         {props.items.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
         ))}
      </ul>
   )
}