import { useState } from "react";
import styles from "./index.module.scss";
// import { ChevronDown } from "../images/icons";
// import { ChevronUp } from "../images/icons";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
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
					{overdue ? (
						<IoChevronUpSharp style={icon} />
					) : (
						<IoChevronDownSharp style={icon} />
					)}
				</div>
			</div>

			<div className={styles.overdueCard}>
				<div className={styles.headOverdue}>
					<div className={styles.inputRadio}>
						<div className={styles.checkTask}></div>
						<div className={styles.task}>Code</div>
					</div>
					<HiOutlineDotsHorizontal style={icon} />
				</div>
				<div className={styles.overdueBackLog}>
					<div className={styles.dayCategory}>
						<div className={styles.day}>Yesterday</div>
						<div className={styles.category}>
							<LuDot style={icon} />
						</div>
					</div>
					<div className={styles.starCalendar}>
						<CiStar style={icon} />
						<CiCalendar style={icon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overdue;
