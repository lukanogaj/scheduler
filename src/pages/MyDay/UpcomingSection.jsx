import TodayTodoCard from "../../components/TodayTodoCard";

const UpcomingSection = ({ upcomingTodos, actions }) => {
	return (
		<section>
			<h2>Upcoming</h2>

			{upcomingTodos.length === 0 ? (
				<p>No upcoming tasks</p>
			) : (
				upcomingTodos.map((todo) => (
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

export default UpcomingSection;
