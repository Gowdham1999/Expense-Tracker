import { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

   return (
      <Card className="expense-item">

         <ExpenseDate expense={props.expense} />

         <div className="expense-item__description">

            <h2>{props.expense.title}</h2>

            <div className="expense-item__price">
               ${props.expense.amount}
            </div>

         </div>

      </Card>
   );
}

export default ExpenseItem;