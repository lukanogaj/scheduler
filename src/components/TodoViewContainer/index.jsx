import styles from "./index.module.scss";
import TodayTodoCard from "../TodayTodoCard";

const TodoViewContainer = ({ todos, completeTodo, updateTodo, deleteTodo }) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); // Start of today
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);

	return (
		<div className={styles.todoTodayContainer}>
			<div className={styles.incompleteTodos}></div>
			<div className={styles.toggleToday}>
				<div className={styles.incompleteTodos}></div>
				<div className={styles.toggleToday}>
					{todos.fil}
					<TodayTodoCard />
					{/* Filter todos */}
					<div className={styles.incompleteTodos}>
						<h2>Incomplete Todos</h2>
						<div>
							{todos
								.filter((t) => !t.completed)
								.map((todo) => (
									<div key={todo.id}>
										<span>{todo.title}</span>
										<div>{todo.description}</div>
										<button onClick={() => completeTodo(todo.id)}>
											Complete
										</button>
										<button
											onClick={() =>
												updateTodo(todo.id, prompt("New title", todo.title))
											}>
											Update
										</button>
										<button onClick={() => deleteTodo(todo.id)}>Delete</button>
									</div>
								))}
						</div>
						<h2>Complete Todos</h2>
						<div>
							{todos
								.filter((t) => t.completed)
								.map((todo) => (
									<div key={todo.id}>
										<span>{todo.title}</span>
										<button onClick={() => deleteTodo(todo.id)}>Delete</button>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoViewContainer;
