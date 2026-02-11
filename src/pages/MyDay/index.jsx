import styles from "./index.module.scss";

import TodayTodoCard from "../../components/TodayTodoCard";

const Section = ({ title, emptyText, todos, actions }) => {
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
						deleteTodo={actions.deleteTodo}
						updateTodo={actions.updateTodo}
						completeTodo={actions.completeTodo}
					/>
				))
			)}
		</div>
	);
};

const MyDayPage = ({ overdueTodos, todayTodos, actions }) => {
	return (
		<section className={styles.myDayPage}>
			<div className={styles.myDayContent}>
				<Section
					title='Overdue'
					emptyText='No overdue tasks 🎉'
					todos={overdueTodos}
					actions={actions}
				/>

				<Section
					title='Today'
					emptyText='No tasks for today'
					todos={todayTodos}
					actions={actions}
				/>
			</div>
		</section>
	);
};

export default MyDayPage;
