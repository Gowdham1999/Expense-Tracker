import './ExpenseDate.css'

export default function ExpenseDate(props) {

   const month = props.expense.date.toLocaleDateString('en-US', { month: "long" });
   const day = props.expense.date.toLocaleDateString('en-US', { day: "numeric" });
   const year = props.expense.date.getFullYear();

   return (
      <div className="expense-date">
         <div className="expense-date__month">{month}</div>
         <div className="expense-date__day">{day}</div>
         <div className="expense-date__year">{year}</div>
      </div>
   )
}