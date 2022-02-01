import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [enteredFilter, setEnteredFilter] = useState("2020");

	const expensesChangeHandler = (filter) => {
		setEnteredFilter(filter);
		// console.log("From Expenses: " + filter);
	};

	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === enteredFilter;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={enteredFilter}
					onChangeFilter={expensesChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
