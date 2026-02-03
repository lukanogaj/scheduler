import { useState } from "react";
import styles from "./index.module.scss";
import mojo from "../images/mojo.jpg";
import { ChevronDown, ChevronUp } from "../images/icons";
import { SidebarToggle } from "../images/icons";
const Header = ({ onToggleSidebar }) => {
	const [chevron, setChevron] = useState(false);

	const dropdownHandler = () => {
		setChevron((prev) => !prev);
	};

	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<button
					className={styles.profileBtn}
					onClick={dropdownHandler}
					type='button'
					aria-expanded={chevron}
					aria-label='Open profile menu'>
					<span className={styles.avatarWrap}>
						<img
							src={mojo}
							alt='Mojo'
						/>
					</span>

					<span className={styles.name}>Lukasz</span>

					<span className={styles.chevron}>
						{chevron ? <ChevronUp /> : <ChevronDown />}
					</span>
				</button>
			</div>

			<div className={styles.right}>
				<button
					className={styles.collapseBtn}
					type='button'
					onClick={onToggleSidebar}
					aria-label='Toggle sidebar'>
					<SidebarToggle className={styles.icon} />
				</button>
			</div>
		</div>
	);
};

export default Header;
