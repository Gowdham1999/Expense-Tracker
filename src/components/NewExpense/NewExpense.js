import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {

   function onGetExpenseForm(newExpense) {
      props.getExpenseForm(newExpense)
   }

   return (
      <div className="new-expense">
         <ExpenseForm getExpenseForm={onGetExpenseForm} />
      </div>
   )
}