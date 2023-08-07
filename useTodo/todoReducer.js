export const todoReducer = (initialState, action) => {
	const actions = {
		"[TODO] Add Todo": [...initialState, action.payload],
		"[TODO] Toggle Todo": initialState.map((item) =>
			item.id === action.payload ? { ...item, done: !item.done } : item
		),
		"[TODO] Remove Todo": initialState.filter(
			(item) => item.id !== action.payload
		),
	};

	const state = actions[action.type];
	if (!Array.isArray(state)) return initialState;
	return state;
};
