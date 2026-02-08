import { useFilteredTodos } from "./useFilteredTodos";
import { isToday } from "../todos/utils/date";

export const useTodayTodos = (todos = []) => {
	return useFilteredTodos(todos, (todo) => todo.due_at && isToday(todo.due_at));
};
