import styles from "./index.module.scss";
import Chevron from "../Chevron";
import { Dots } from "../images/icons";
import { Dot } from "../images/icons";
import { Star } from "../images/icons";
import { Watch } from "../images/icons";
const TodayTodoCard = ({ chevron, chevronHandler }) => {
	const icon = {
		color: "#ffffff",
		fontSize: "4em",
	};
	return (
		<div className={styles.todayTodoCard}>
			<div className={styles.toggleTodayCard}>
				<h1>Today</h1>
				<Chevron
					chevron={chevron}
					chevronHandler={chevronHandler}
				/>
			</div>

			<div className={styles.todayCard}>
				<div className={styles.headerToday}>
					<div className={styles.inputRadio}>
						<input
							type='radio'
							value='yes'
							name='option'
							id='yes'
						/>
						<label htmlFor='yes'>Code</label>
					</div>
					<div st>
						<Dots style={icon} />
						<Chevron
							chevron={chevron}
							chevronHandler={chevronHandler}
						/>
					</div>
				</div>
				<div className={styles.overdueBackLog}>
					<div className={styles.dayCategory}>
						<div className={styles.day}>Yesterday</div>
						<div className={styles.category}>
							<Dot style={{ color: "#646667" }} />
						</div>
						<div className={styles.dayCat}>Tasks</div>
					</div>
					<div className={styles.starCalendar}>
						<Star style={icon} />
						<Watch style={icon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodayTodoCard;
