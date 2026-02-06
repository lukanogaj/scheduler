import { useState } from "react";
import styles from "./index.module.scss";
import mojo from "../images/mojo.jpg";
import { SIDEBAR_HEADER_DATA } from "../../data/sidebarData";

const Header = ({ onToggleSidebar }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { profile, actions } = SIDEBAR_HEADER_DATA;
	const ChevronIcon = isOpen ? profile.chevron.open : profile.chevron.closed;

	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<button
					type='button'
					className={styles.profileBtn}
					onClick={() => setIsOpen((prev) => !prev)}
					aria-expanded={isOpen}
					aria-label='Open profile menu'>
					<span className={styles.avatarWrap}>
						<img
							src={mojo}
							alt={profile.avatarAlt}
						/>
					</span>

					<span className={styles.name}>{profile.name}</span>

					<span className={styles.chevron}>
						<ChevronIcon />
					</span>
				</button>
			</div>

			<div className={styles.right}>
				{actions.map(({ id, icon: Icon, ariaLabel }) => (
					<button
						key={id}
						type='button'
						className={styles.collapseBtn}
						onClick={onToggleSidebar}
						aria-label={ariaLabel}>
						<Icon className={styles.icon} />
					</button>
				))}
			</div>
		</div>
	);
};

export default Header;

// import { useState } from "react";
// import styles from "./index.module.scss";
// import mojo from "../images/mojo.jpg";
// import { ChevronDown, ChevronUp } from "../images/icons";
// import { SidebarToggle } from "../images/icons";
// const Header = ({ onToggleSidebar }) => {
// 	const [chevron, setChevron] = useState(false);

// 	const dropdownHandler = () => {
// 		setChevron((prev) => !prev);
// 	};

// 	return (
// 		<div className={styles.header}>
// 			<div className={styles.left}>
// 				<button
// 					className={styles.profileBtn}
// 					onClick={dropdownHandler}
// 					type='button'
// 					aria-expanded={chevron}
// 					aria-label='Open profile menu'>
// 					<span className={styles.avatarWrap}>
// 						<img
// 							src={mojo}
// 							alt='Mojo'
// 						/>
// 					</span>

// 					<span className={styles.name}>Lukasz</span>

// 					<span className={styles.chevron}>
// 						{chevron ? <ChevronUp /> : <ChevronDown />}
// 					</span>
// 				</button>
// 			</div>

// 			<div className={styles.right}>
// 				<button
// 					className={styles.collapseBtn}
// 					type='button'
// 					onClick={onToggleSidebar}
// 					aria-label='Toggle sidebar'>
// 					<SidebarToggle className={styles.icon} />
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Header;
