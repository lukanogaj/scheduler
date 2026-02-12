import styles from "./Content.module.scss";
// // import Sidebar from "../../components/Sidebar";

// // const Content = ({ children, onAddTaskClick, headerLeft }) => {
// // 	return (
// // 		<div className={styles.content}>
// // 			<Sidebar onAddTaskClick={onAddTaskClick} />

// // 			<div className={styles.mainWrapper}>
// // 				<main className={styles.main}>{children}</main>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default Content;
// import Sidebar from "../../components/Sidebar";
// import DateTimeClock from "../DateTimeClock/DateTimeClock";
// import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

// const Content = ({ children, onAddTaskClick, headerLeft }) => {
// 	return (
// 		<div className={styles.content}>
// 			<Sidebar onAddTaskClick={onAddTaskClick} />

// 			<div className={styles.mainWrapper}>
// 				{/* Full-width header bar */}
// 				<header className={styles.header}>
// 					{/* Clamped header content (title + date/time) */}
// 					<div className={styles.headerInner}>
// 						<div className={styles.headerLeft}>{headerLeft}</div>
// 						<DateTimeClock />
// 					</div>

// 					{/* Pinned far-right utilities (icons only) */}
// 					<div className={styles.headerUtilities}>
// 						<HeaderUtilities />
// 					</div>
// 				</header>

// 				{/* Clamped page content column */}
// 				<div className={styles.inner}>
// 					<main className={styles.main}>{children}</main>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Content;
// import Sidebar from "../../components/Sidebar";
// import DateTimeClock from "../DateTimeClock/DateTimeClock";
// import HeaderUtilities from "../HeaderUtilities/HeaderUtilities";

// const Content = ({ children, onAddTaskClick, headerLeft }) => {
// 	return (
// 		<div className={styles.content}>
// 			<Sidebar onAddTaskClick={onAddTaskClick} />

// 			<div className={styles.mainWrapper}>
// 				<header className={styles.header}>
// 					<div className={styles.headerInner}>
// 						<div className={styles.headerLeft}>{headerLeft}</div>
// 						<DateTimeClock />
// 					</div>

// 					<div className={styles.headerUtilities}>
// 						<HeaderUtilities />
// 					</div>
// 				</header>

// 				<div className={styles.inner}>
// 					<main className={styles.main}>{children}</main>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Content;
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
							<HeaderUtilities />
						</div>
					</header>

					<main className={styles.main}>{children}</main>
				</div>
			</div>
		</div>
	);
};

export default Content;
