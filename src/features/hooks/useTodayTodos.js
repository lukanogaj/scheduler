import { useMemo } from "react";
import { isToday } from "../utils/date";

export const useTodayTodos = (todos) => {
	return useMemo(() => {
		return todos.filter((todo) => isToday(todo.date));
	}, [todos]);
};
