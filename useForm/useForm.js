import { useState } from "react";

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		if (!Object.keys(formState).includes(name)) return;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onReset = () => {
		setFormState(initialForm);
	};

	return { formState, ...formState, onInputChange, onReset };
};
