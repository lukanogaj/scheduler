const startOfToday = () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today;
};

const startOfTomorrow = () => {
	const tomorrow = startOfToday();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow;
};

const useTodayTodos = (todos) => {
	const today = startOfToday();
	const tomorrow = startOfTomorrow();
	//
	const todayTodos = todos.filter((todo) => {
		if (!todo.due_at) return false;
		const dueDate = new Date(todo.due_at);
		return dueDate >= today && dueDate < tomorrow;
	});

	todayTodos.sort((a, b) => new Date(a.due_at) - new Date(b.due_at));
	return todayTodos;
};

export default useTodayTodos;
