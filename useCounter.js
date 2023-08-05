import { useState } from "react";

export const useCounter = (initialValue = 0) => {
	const [count, setCount] = useState(initialValue);

	const updateCounter = (toUp, quantity) => {
		const update = toUp ? quantity : -quantity;
		setCount((value) => value + update);
	};

	const increment = (quantity = 1) => {
		updateCounter(true, quantity);
	};

	const decrement = (quantity = 1) => {
		updateCounter(false, quantity);
	};

	const resetCount = () => {
		setCount(initialValue);
	};

	return { count, increment, decrement, resetCount };
};
