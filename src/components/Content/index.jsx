import styles from "./index.module.scss";
import Sidebar from "../../components/Sidebar";
import DateTimeClock from "../DateTimeClock/DateTimeClock";
// import your header icons here

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
							{/* header utility icons go here */}
						</div>
					</header>

					<main className={styles.main}>{children}</main>
				</div>
			</div>
		</div>
	);
};

export default Content;

// import styles from "./index.module.scss";
// import Sidebar from "../../components/Sidebar";

// const Content = ({ children, onAddTaskClick, headerLeft }) => {
// 	return (
// 		<div className={styles.content}>
// 			<Sidebar onAddTaskClick={onAddTaskClick} />

// 			<div className={styles.mainWrapper}>
// 				<main className={styles.main}>{children}</main>
// 			</div>
// 		</div>
// 	);
// };

// export default Content;
