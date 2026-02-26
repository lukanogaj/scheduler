import { useFilteredTodos } from "./useFilteredTodos";
import { isFuture } from "../todos/utils/date";

export const useUpcomingTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => todo.due_on && !todo.completed && isFuture(todo.due_on),
	);
};
