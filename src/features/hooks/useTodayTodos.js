import { useMemo } from "react";
import { isToday } from "../todos/utils/date";

export const useTodayTodos = (todos) => {
	return useMemo(() => {
		return todos.filter((todo) => isToday(todo.date));
	}, [todos]);
};
