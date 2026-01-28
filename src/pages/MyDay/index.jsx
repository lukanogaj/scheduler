import styles from "./index.module.scss";

import Content from "../../components/Content";
import TodayTodoCard from "../../components/TodayTodoCard";

const Section = ({
	title,
	emptyText,
	todos,
	deleteTodo,
	updateTodo,
	completeTodo,
}) => {
	const isEmpty = !todos || todos.length === 0;

	return (
		<div className={styles.section}>
			<div className={styles.sectionHeader}>
				<h2 className={styles.sectionTitle}>{title}</h2>
			</div>

			{isEmpty ? (
				<p className={styles.emptyText}>{emptyText}</p>
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
		</div>
	);
};

const MyDayPage = ({
	overdueTodos,
	todayTodos,
	deleteTodo,
	updateTodo,
	completeTodo,
}) => {
	return (
		<Content>
			<section className={styles.myDayPage}>
				<div className={styles.myDayContent}>
					<Section
						title='Overdue'
						emptyText='No overdue tasks 🎉'
						todos={overdueTodos}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						completeTodo={completeTodo}
					/>

					<Section
						title='Today'
						emptyText='No tasks for today'
						todos={todayTodos}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						completeTodo={completeTodo}
					/>
				</div>
			</section>
		</Content>
	);
};

export default MyDayPage;
