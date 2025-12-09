import styles from "./index.module.scss";
import { LuSlidersVertical } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";

// import DateTimeClock from "../DateTimeClock";

const Navbar = () => {
	const icon = {
		color: "#b3b2b5",
		fontSize: "4.5em",
	};
	return (
		<div className={styles.navbar}>
			<div className={styles.heading}>
				<h1>My Day</h1>
			</div>
			<div className={styles.timeWrapper}>
				<div className={styles.dateTime}>
					<div className={styles.date}>
						<h2 className={styles.headDate}>Tue 09,December</h2>
					</div>
					<div className={styles.time}>
						<h2 className={styles.headTime}>15:40 pm</h2>
					</div>
				</div>
				<div className={styles.navbarIcons}>
					<div className={styles.toggle}>
						<LuSlidersVertical style={icon} />
						<PiLightbulbFilament style={icon} />
					</div>
					<div className={styles.lightDarkMode}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
