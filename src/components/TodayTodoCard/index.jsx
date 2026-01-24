import { useState } from "react";
import styles from "./index.module.scss";

import Chevron from "../Chevron";
import { Dots, Dot, Star, Watch } from "../images/icons";

const TodayTodoCard = ({ todo, completeTodo, updateTodo, deleteTodo }) => {
	const [expanded, setExpanded] = useState(false);

	if (!todo) return <div className={styles.error}>NO TODO PASSED</div>;

	const onToggle = () => setExpanded((v) => !v);
	const onComplete = () => completeTodo(todo.id);

	const onEdit = () => {
		const next = prompt("New title", todo.title);
		if (next) updateTodo(todo.id, next);
	};

	const onDelete = () => deleteTodo(todo.id);

	return (
		<div className={styles.todayCard}>
			<div className={styles.headerToday}>
				<button
					className={styles.check}
					onClick={onComplete}
					aria-label='Complete todo'
				/>

				<div className={styles.titleBlock}>
					<div className={styles.title}>{todo.title}</div>

					{expanded && todo.description && (
						<div className={styles.description}>{todo.description}</div>
					)}
				</div>

				<div className={styles.toggleChevron}>
					<button
						className={styles.iconBtn}
						onClick={onToggle}
						aria-label='Toggle details'>
						<Chevron chevron={expanded ? "up" : "down"} />
					</button>

					{/* Temporary: dots acts like a quick menu */}
					<button
						className={styles.iconBtn}
						onClick={onEdit}
						aria-label='Edit todo'>
						<Dots className={styles.icon} />
					</button>
				</div>
			</div>

			<div className={styles.footerRow}>
				<div className={styles.dayCategory}>
					<span className={styles.day}>Today</span>
					<span className={styles.dotWrap}>
						<Dot className={styles.dot} />
					</span>
					<span className={styles.dayCat}>{todo.listName ?? "Tasks"}</span>
				</div>

				<div className={styles.starCalendar}>
					<button
						className={styles.iconBtn}
						disabled
						aria-label='Star (coming soon)'>
						<Star className={styles.icon} />
					</button>

					<button
						className={styles.iconBtn}
						disabled
						aria-label='Schedule (coming soon)'>
						<Watch className={styles.icon} />
					</button>

					<button
						className={styles.dangerBtn}
						onClick={onDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodayTodoCard;

// import styles from "./index.module.scss";

// import Chevron from "../Chevron";
// import { Dots, Dot, Star, Watch } from "../images/icons";

// const TodayTodoCard = ({ todo, chevron, chevronHandler }) => {
// 	//  🔐. Safe guard
// 	if (!todo) {
// 		return <div style={{ color: "red" }}>NO TODO PASSED</div>;
// 	}
// 	const icon = {
// 		color: "#ffffff",
// 		fontSize: "4em",
// 	};

// 	//

// 	return (
// 		<div className={styles.todayCard}>
// 			<div className={styles.headerToday}>
// 				<div className={styles.inputRadio}>
// 					<input
// 						type='checkbox'
// 						checked={!!todo.completed}
// 						readOnly
// 					/>
// 					<label>{todo.title}</label>
// 				</div>

// 				<div className={styles.toggleChevron}>
// 					<Chevron
// 						chevron={chevron}
// 						chevronHandler={chevronHandler}
// 					/>
// 					<Dots style={icon} />
// 				</div>
// 			</div>

// 			<div className={styles.overdueBackLog}>
// 				<div className={styles.dayCategory}>
// 					<div className={styles.day}>Today</div>
// 					<div className={styles.category}>
// 						<Dot style={{ color: "#646667" }} />
// 					</div>
// 					<div className={styles.dayCat}>{todo.listName ?? "Tasks"}</div>
// 				</div>

// 				<div className={styles.starCalendar}>
// 					<Star style={icon} />
// 					<Watch style={icon} />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default TodayTodoCard;
