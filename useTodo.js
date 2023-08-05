import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
	const items = localStorage.getItem("todos");
	if (!items) return [];
	const parsedItems = JSON.parse(items);
	return parsedItems;
};

const saveTodos = (todos) => {
	const parsedTodos = JSON.stringify(todos);
	localStorage.setItem("todos", parsedTodos);
};

export const useTodo = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
	const [computedTodos, setComputedTodos] = useState([]);

	const { todosCount, pendingCount } = computedTodos;

	const onAddTodo = (todo) => {
		const action = { type: "[TODO] Add Todo", payload: todo };
		dispatchTodo(action);
	};

	const onRemoveTodo = (id) => {
		const action = { type: "[TODO] Remove Todo", payload: id };
		dispatchTodo(action);
	};

	const onToggleTodo = (id) => {
		const action = {
			type: "[TODO] Toggle Todo",
			payload: id,
		};
		dispatchTodo(action);
	};

	useEffect(() => {
		setComputedTodos({
			todosCount: todos.length,
			pendingCount: todos.filter((item) => !item.done).length,
		});

		saveTodos(todos);
	}, [todos]);

	return {
		todos,
		onAddTodo,
		onRemoveTodo,
		onToggleTodo,
		todosCount,
		pendingCount,
	};
};
