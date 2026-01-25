import styles from "./index.module.scss";

import Content from "../../components/Content";
import TodayTodoCard from "../../components/TodayTodoCard";

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
					{/* Overdue */}
					<div className={styles.section}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Overdue</h2>
						</div>

						{overdueTodos.length === 0 ? (
							<p className={styles.emptyText}>No overdue tasks 🎉</p>
						) : (
							overdueTodos.map((todo) => (
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

					{/* Today */}
					<div className={styles.section}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Today</h2>
						</div>

						{todayTodos.length === 0 ? (
							<p className={styles.emptyText}>No tasks for today</p>
						) : (
							todayTodos.map((todo) => (
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
				</div>
			</section>
		</Content>
	);
};

export default MyDayPage;
