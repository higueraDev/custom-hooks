import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: [],
		isLoading: true,
		hasError: false,
	});

	const { data, isLoading, hasError } = state;

	const fetchAPI = async () => {
		let _hasError = false;
		let _data = [];
		setState({
			...state,
			hasError: false,
			isLoading: true,
		});

		try {
			const res = await fetch(url);
			_data = await res.json();
		} catch {
			_hasError = true;
		}

		setState({
			data: _data,
			isLoading: false,
			hasError: _hasError,
		});
	};

	useEffect(() => {
		fetchAPI();
	}, []);

	return { data, isLoading, hasError, fetchAPI };
};
