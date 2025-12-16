import { useState } from "react";
import styles from "./index.module.scss";
import { ChevronDown } from "../images/icons";
import { ChevronUp } from "../images/icons";
import { Dots } from "../images/icons";
import { Dot } from "../images/icons";
import { Star } from "../images/icons";
import { Calendar } from "../images/icons";
const Overdue = () => {
	const icon = {
		color: "#ffffff",
		fontSize: "4em",
	};
	const [overdue, setOverdue] = useState(true);

	const handleOverdue = () => {
		setOverdue(!overdue);
	};

	return (
		<div className={styles.overdue}>
			<div className={styles.toggleOverdue}>
				<h1>Overdue</h1>
				<div onClick={handleOverdue}>
					{overdue ? <ChevronUp style={icon} /> : <ChevronDown style={icon} />}
				</div>
			</div>

			<div className={styles.overdueCard}>
				<div className={styles.headOverdue}>
					<div className={styles.inputRadio}>
						<input
							type='radio'
							value='yes'
							name='option'
							id='yes'
						/>
						<label htmlFor='yes'>Code</label>
					</div>
					<Dots style={icon} />
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
						<Calendar style={icon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overdue;
