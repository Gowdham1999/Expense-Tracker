import './Expenses.css'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpenseChart from '../ExpenseChart/ExpenseChart'
import { useState } from 'react';

export default function Expenses(props) {

   const [selectedYear, setSelectedYear] = useState('2022')

   function onGetExpenseYear(year) {
      setSelectedYear(year);
      // console.log(year)
   }

   const filteredArray = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear)

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter selected={selectedYear} getExpenseYear={onGetExpenseYear} />
            <ExpenseChart expenses={filteredArray} />
            <ExpensesList items={filteredArray} />
         </Card>
      </div>
   )
}