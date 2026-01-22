import styles from "./index.module.scss";

import Chevron from "../Chevron";
import { Dots, Dot, Star, Watch } from "../images/icons";

const TodayTodoCard = ({ todo, chevron, chevronHandler }) => {
	//  🔐. Safe guard
	if (!todo) {
		return <div style={{ color: "red" }}>NO TODO PASSED</div>;
	}
	const icon = {
		color: "#ffffff",
		fontSize: "4em",
	};

	//

	return (
		<div className={styles.todayCard}>
			<div className={styles.headerToday}>
				<div className={styles.inputRadio}>
					<input
						type='checkbox'
						checked={!!todo.completed}
						readOnly
					/>
					<label>{todo.title}</label>
				</div>

				<div className={styles.toggleChevron}>
					<Chevron
						chevron={chevron}
						chevronHandler={chevronHandler}
					/>
					<Dots style={icon} />
				</div>
			</div>

			<div className={styles.overdueBackLog}>
				<div className={styles.dayCategory}>
					<div className={styles.day}>Today</div>
					<div className={styles.category}>
						<Dot style={{ color: "#646667" }} />
					</div>
					<div className={styles.dayCat}>{todo.listName ?? "Tasks"}</div>
				</div>

				<div className={styles.starCalendar}>
					<Star style={icon} />
					<Watch style={icon} />
				</div>
			</div>
		</div>
	);
};

export default TodayTodoCard;
