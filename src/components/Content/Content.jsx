// import styles from "./Content.module.scss";

// // export default Content;
// import Sidebar from "../../components/Sidebar";
// import DateTimeClock from "../DateTimeClock/DateTimeClock";
// import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

// const Content = ({ children, onAddTaskClick, headerLeft }) => {
// 	return (
// 		<div className={styles.content}>
// 			<Sidebar onAddTaskClick={onAddTaskClick} />

// 			<div className={styles.mainWrapper}>
// 				<div className={styles.inner}>
// 					<header className={styles.header}>
// 						<div className={styles.headerLeft}>{headerLeft}</div>

// 						<div className={styles.headerRight}>
// 							<DateTimeClock />
// 						</div>
// 					</header>

// 					<main className={styles.main}>{children}</main>
// 				</div>
// 				<HeaderUtilities />
// 			</div>
// 		</div>
// 	);
// };

// export default Content;

import styles from "./Content.module.scss";
import Sidebar from "../../components/Sidebar";
import DateTimeClock from "../DateTimeClock/DateTimeClock";
import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

const Content = ({ children, onAddTaskClick, headerLeft }) => {
	return (
		<div className={styles.content}>
			<Sidebar onAddTaskClick={onAddTaskClick} />

			<div className={styles.mainWrapper}>
				<div className={styles.inner}>
					<header className={styles.header}>
						<div className={styles.headerLeft}>{headerLeft}</div>

						<div className={styles.headerRight}>
							<DateTimeClock />
						</div>
					</header>

					<main className={styles.main}>{children}</main>
				</div>

				{/* ✅ pinned far-right icons */}
				<div className={styles.rightRail}>
					<HeaderUtilities />
				</div>
			</div>
		</div>
	);
};

export default Content;
