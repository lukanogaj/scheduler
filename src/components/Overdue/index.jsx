import { useState } from "react";
import styles from "./index.module.scss";
import { ChevronDown } from "../images/icons";
import { ChevronUp } from "../images/icons";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
const Overdue = () => {
	const [overdue, setOverdue] = useState(true);

	const handleOverdue = () => {
		setOverdue(!overdue);
	};

	const icon = {
		color: "#DBDDE1",
		fontSize: "3em",
	};

	return (
		<div className={styles.overdue}>
			<div className={styles.toggleOverdue}>
				<h1>Overdue</h1>
				<div onClick={handleOverdue}>
					{overdue ? <ChevronUp /> : <ChevronDown />}
				</div>
			</div>
			<div className={styles.headOverdue}>
				<input type='checkbox' />
				<div className={styles.task}></div>
				<HiOutlineDotsHorizontal style={icon} />
			</div>
			<div className={styles.overdueBackLog}>
				<div className={styles.dayCategory}>
					<div className={styles.day}></div>
					<div className={styles.category}></div>
				</div>
				<div className={styles.starCalendar}>
					<CiStar style={icon} />
					<CiCalendar style={icon} />
				</div>
			</div>
		</div>
	);
};

export default Overdue;
