import TodayTodoCard from "../../components/TodayTodoCard";

const NoDateSection = ({ undatedTodos, actions }) => {
	return (
		<section>
			<h2>No Date</h2>

			{undatedTodos.length === 0 ? (
				<p>No tasks without a date</p>
			) : (
				undatedTodos.map((todo) => (
					<TodayTodoCard
						key={todo.id}
						todo={todo}
						actions={actions}
					/>
				))
			)}
		</section>
	);
};

export default NoDateSection;
