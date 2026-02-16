import { useFilteredTodos } from "./useFilteredTodos";
import { isOverdue } from "../todos/utils/date";

export const useOverdueTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_at && !todo.completed && isOverdue(todo.due_at),
	);
};
