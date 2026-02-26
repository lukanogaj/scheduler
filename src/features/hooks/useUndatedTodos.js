import { useFilteredTodos } from "./useFilteredTodos";
import { isUndated } from "../todos/utils/date";

export const useUndatedTodos = (todos = []) => {
	return useFilteredTodos(
		todos,
		(todo) => isUndated(todo.due_on) && !todo.completed,
	);
};
