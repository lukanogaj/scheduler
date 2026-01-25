import TodayTodoCard from "../../components/TodayTodoCard";

const OverdueSection = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
	return (
		<section>
			<h2>Overdue</h2>

			{todos.length === 0 ? (
				<p>No overdue tasks 🎉</p>
			) : (
				todos.map((todo) => (
					<TodayTodoCard
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						completeTodo={completeTodo}
					/>
				))
			)}
		</section>
	);
};

export default OverdueSection;
