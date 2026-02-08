import { useMemo } from "react";

export const useFilteredTodos = (todos = [], predicate) => {
	return useMemo(() => {
		return todos.filter(predicate);
	}, [todos, predicate]);
};
