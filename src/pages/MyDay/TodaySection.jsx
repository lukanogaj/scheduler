import TodayTodoCard from "../../components/TodayTodoCard";

const TodaySection = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
	return (
		<section>
			<h2>Today</h2>

			{todos.length === 0 ? (
				<p>No tasks for today</p>
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

export default TodaySection;
