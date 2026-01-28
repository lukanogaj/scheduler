import { useState } from "react";
import styles from "./index.module.scss";
import mojo from "../images/mojo.jpg";
import { ChevronDown, ChevronUp } from "../images/icons";
import { BsLayoutSplit } from "react-icons/bs";

const Header = ({ onToggleSidebar }) => {
	const [chevron, setChevron] = useState(true);

	const dropdownHandler = () => setChevron((v) => !v);
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<button
					className={styles.profileBtn}
					onClick={dropdownHandler}
					type='button'>
					<span className={styles.avatarWrap}>
						<img
							src={mojo}
							alt='Mojo'
						/>
					</span>

					<span className={styles.name}>Lukasz</span>

					<span className={styles.chevron}>
						{chevron ? <ChevronDown /> : <ChevronUp />}
					</span>
				</button>
			</div>

			<div className={styles.right}>
				<button
					className={styles.collapseBtn}
					type='button'
					onClick={onToggleSidebar}
					aria-label='Toggle sidebar'>
					<BsLayoutSplit />
				</button>
			</div>
		</div>
	);
};

export default Header;
