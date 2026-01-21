import supabase from "../helper/supabaseClient";

// READ
export const fetchTodos = async () => {
	const { data, error } = await supabase
		.from("todos")
		.select("*")
		.order("created_at", { ascending: true });
	if (error) throw error;
	return data ?? [];
};

// CREATE
export const insertTodo = async ({ title, description, due_at }) => {
	const { error } = await supabase
		.from("todos")
		.insert([{ title, description, due_at }]);
	if (error) throw error;
};

// DELETE
export const removeTodo = async (id) => {
	const { error } = await supabase.from("todos").delete().eq("id", id);

	if (error) throw error;
};

// UPDATE (title)

export const updateTodoTitle = async (id, title) => {
	const { error } = await supabase.from("todos").update({ title }).eq("id", id);
	if (error) throw error;
};

// UPDATE (completed)
export const markTodoComplete = async (id) => {
	const { error } = await supabase
		.from("todos")
		.update({ completed: true })
		.eq("id", id);

	if (error) throw error;
};
