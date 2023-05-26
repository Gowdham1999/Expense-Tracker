import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState('');
   const [date, setDate] = useState('');

   function onChangeTitle(event) {
      setTitle(event.target.value);
   }

   function onChangeAmount(event) {
      setAmount(event.target.value);
   }

   function onChangeDate(event) {
      setDate(event.target.value);
   }

   function onSubmitForm(event) {
      event.preventDefault();

      const expenseForm = {
         enteredTitle: title,
         enteredAmount: +amount,
         enteredDate: new Date(date).toLocaleDateString(),
      }

      props.getExpenseForm(expenseForm)

      setTitle('')
      setAmount('')
      setDate('')
   }

   const [showForm, setShowForm] = useState(false)

   let content = (
      <div className="new-expense__button">
         <button type="button" onClick={onShowExpenseFormHandler}>New Expense</button>
      </div>
   )
   function onShowExpenseFormHandler() {
      setShowForm(true)
   }

   function onCancelExpenseFormHandler() {
      setShowForm(false)
   }

   if (showForm) {
      content = (<form onSubmit={onSubmitForm}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>Title</label>
               <input type="text" value={title} onChange={onChangeTitle} placeholder='Please enter the expense title here!' />
            </div>
            <div className="new-expense__control">
               <label>Amount</label>
               <input type="number" value={amount} min="1" step="0.5" onChange={onChangeAmount} placeholder='Please enter the expense amount here!' />
            </div>
            <div className="new-expense__control">
               <label>Date</label>
               <input type="date" value={date} min="2019-01-01" max="2023-12-31" onChange={onChangeDate} />
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="button" onClick={onCancelExpenseFormHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>)
   }

   return (
      <>
         {content}
      </>
   )
}