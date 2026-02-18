import { useFilteredTodos } from "./useFilteredTodos";
import { isOverdue } from "../todos/utils/date";

export const useOverdueTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_on && !todo.completed && isOverdue(todo.due_on),
	);
};
