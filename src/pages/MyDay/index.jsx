import { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import TodoRow from "../../components/TodoRow/TodoRow";

const Section = ({ title, emptyText, todos, actions, variant }) => {
	const isEmpty = !todos || todos.length === 0;

	// 🔹 Lifted state (one open menu per section)
	const [menuOpenId, setMenuOpenId] = useState(null);
	const menuRef = useRef(null);
	///////////////////
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!menuOpenId) return;

			if (menuRef.current && menuRef.current.contains(event.target)) {
				return;
			}

			setMenuOpenId(null);
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [menuOpenId]);

	/////////////////////////
	const openMenu = (id) => {
		setMenuOpenId(id);
	};

	const closeMenu = () => {
		setMenuOpenId(null);
	};

	return (
		<div
			className={`${styles.section} ${
				variant && styles[variant] ? styles[variant] : ""
			}`}>
			<div className={styles.sectionHeader}>
				<h2 className={styles.sectionTitle}>{title}</h2>
			</div>

			{isEmpty ? (
				<p className={styles.emptyText}>{emptyText}</p>
			) : (
				<div className={styles.todosList}>
					{todos.map((todo) => (
						<TodoRow
							key={todo.id}
							todo={todo}
							actions={actions}
							isMenuOpen={menuOpenId === todo.id}
							onOpenMenu={() => openMenu(todo.id)}
							onCloseMenu={closeMenu}
							menuRef={menuRef}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const MyDayPage = ({
	overdueTodos,
	todayTodos,
	upcomingTodos,
	undatedTodos,
	actions,
}) => {
	return (
		<section className={styles.myDayPage}>
			<div className={styles.myDayContent}>
				{/* 🔹 Overdue */}
				<Section
					title='Overdue'
					emptyText='No overdue tasks 🎉'
					todos={overdueTodos}
					actions={actions}
					variant='overdue'
				/>

				{/* 🔹 Today */}
				<Section
					title='Today'
					emptyText='No tasks for today'
					todos={todayTodos}
					actions={actions}
				/>

				{/* 🔹 Upcoming */}
				<Section
					title='Upcoming'
					emptyText='No upcoming tasks'
					todos={upcomingTodos}
					actions={actions}
					variant='upcoming'
				/>

				{/* 🔹 No Date */}
				<Section
					title='No Date'
					emptyText='No tasks without a date'
					todos={undatedTodos}
					actions={actions}
					variant='undated'
				/>
			</div>
		</section>
	);
};

export default MyDayPage;
