import { useMemo } from "react";
import { isOverdue } from "../utils/date";

export const useOverdueTodos = (todos) => {
	return useMemo(() => {
		return todos.filter((todo) => isOverdue(todo.date));
	}, [todos]);
};
