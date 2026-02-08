import { useFilteredTodos } from "./useFilteredTodos";
import { isOverdue } from "../todos/utils/date";

export const useOverdueTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_at && isOverdue(todo.due_at),
	);
};
