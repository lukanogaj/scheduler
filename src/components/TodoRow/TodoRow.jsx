import styles from "./TodoRow.module.scss";
import { Dots, Dot, Star, Watch } from "../images/icons";

const TodoRow = ({ todo, completeTodo, updateTodo, deleteTodo }) => {
	if (!todo) return <div className={styles.error}>NO TODO PASSED</div>;

	const onComplete = () => completeTodo(todo.id);

	const onEdit = () => {
		const next = prompt("New title", todo.title);
		if (next) updateTodo(todo.id, next);
	};

	return (
		<div className={styles.todayCard}>
			<div className={styles.headerToday}>
				<div className={styles.leftBlock}>
					<input
						id={`todo-${todo.id}`}
						className={styles.check}
						type='checkbox'
						checked={!!todo.completed}
						onChange={onComplete}
						aria-label={`Mark ${todo.title} as complete`}
					/>

					<div className={styles.textBlock}>
						<label
							className={styles.title}
							htmlFor={`todo-${todo.id}`}>
							{todo.title}
						</label>

						<div className={styles.metaRow}>
							<span className={styles.day}>Today</span>
							<span className={styles.dotWrap}>
								<Dot className={styles.dot} />
							</span>
							<span className={styles.dayCat}>{todo.listName ?? "Tasks"}</span>
						</div>
					</div>
				</div>

				<div className={styles.actions}>
					<div className={styles.topActions}>
						<button
							type='button'
							className={styles.iconBtn}
							onClick={onEdit}
							aria-label='More actions'>
							<Dots className={styles.icon} />
						</button>
					</div>

					<div className={styles.bottomActions}>
						<button
							type='button'
							className={styles.iconBtn}
							disabled
							aria-label='Star (coming soon)'>
							<Star className={styles.icon} />
						</button>

						<button
							type='button'
							className={styles.iconBtn}
							disabled
							aria-label='Schedule (coming soon)'>
							<Watch className={styles.icon} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoRow;
