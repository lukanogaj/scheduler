import styles from "./TodoRow.module.scss";
import { Dots, Dot, ChevronDown } from "../images/icons";
import { useState } from "react";

const TodoRow = ({
	todo,
	actions,
	isMenuOpen,
	onOpenMenu,
	onCloseMenu,
	menuRef,
	openEditTodo,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (!todo) {
		return <div className={styles.error}>NO TODO PASSED</div>;
	}

	const { completeTodo, updateTodo, deleteTodo } = actions;

	const onComplete = () => completeTodo(todo.id);

	const onEdit = async () => {
		const nextTitleRaw = prompt("New title", todo.title);
		if (nextTitleRaw === null) return;

		const nextTitle = nextTitleRaw.trim();
		if (!nextTitle) return;

		const nextDate = prompt("New date (YYYY-MM-DD)", todo.due_on ?? "");
		if (nextDate === null) return;

		const updates = {
			title: nextTitle,
			due_on: nextDate,
		};

		const res = await updateTodo(todo.id, updates);
		if (!res?.ok) {
			alert(res?.error ?? "Failed to update todo");
		}
	};

	const onDelete = () => {
		const confirmed = window.confirm("Delete this task?");
		if (!confirmed) return;

		deleteTodo(todo.id);
	};

	const toggleExpand = () => {
		onCloseMenu(); // Michal-proof rule
		setIsExpanded((v) => !v);
	};

	return (
		<div className={styles.card}>
			<div
				className={styles.header}
				onClick={toggleExpand}>
				{/* LEFT SIDE */}
				<div className={styles.content}>
					<input
						className={styles.checkbox}
						type='checkbox'
						checked={!!todo.completed}
						onClick={(e) => e.stopPropagation()}
						onChange={onComplete}
						aria-label={`Mark ${todo.title} as complete`}
					/>

					<div className={styles.text}>
						<div className={styles.title}>{todo.title}</div>

						<div className={styles.meta}>
							<Dot className={styles.dot} />
							<span className={styles.category}>
								{todo.listName ?? "Tasks"}
							</span>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE CONTROLS */}
				<div className={styles.controls}>
					{/* CHEVRON */}
					<button
						type='button'
						className={styles.iconBtn}
						onClick={(e) => {
							e.stopPropagation();
							toggleExpand();
						}}
						aria-expanded={isExpanded}>
						<ChevronDown
							className={`${styles.icon} ${
								isExpanded ? styles.chevronOpen : ""
							}`}
						/>
					</button>

					{/* DOTS */}
					<button
						type='button'
						className={styles.iconBtn}
						onClick={(e) => {
							e.stopPropagation();
							onOpenMenu();
						}}>
						<Dots className={styles.icon} />
					</button>

					{/* MENU */}
					{isMenuOpen && (
						<div
							ref={menuRef}
							className={styles.menu}
							onClick={(e) => e.stopPropagation()}>
							<button
								className={styles.menuItem}
								onClick={() => {
									onCloseMenu();
									openEditTodo();
								}}>
								Edit
							</button>

							<button
								className={`${styles.menuItem} ${styles.danger}`}
								onClick={() => {
									onCloseMenu();
									onDelete();
								}}>
								Delete
							</button>
						</div>
					)}
				</div>
			</div>

			{/* EXPANDED CONTENT */}
			{isExpanded && (
				<div className={styles.details}>
					{todo.description?.trim() ? (
						<p className={styles.description}>{todo.description}</p>
					) : (
						<p className={styles.descriptionEmpty}>No description</p>
					)}
				</div>
			)}
		</div>
	);
};

export default TodoRow;
