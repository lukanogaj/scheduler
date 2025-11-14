import styles from "./index.module.scss";
import mojo from "../../images/mojo.jpg";
import { ChevronDown } from "../../images/icons";
import { ChevronUp } from "../../images/icons";
import { SplitScreen } from "../../images/icons";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.mojoHeader}>
				<div className={styles.mojoImg}>
					<img
						src={mojo}
						alt='Mojo'
					/>
				</div>
				<h1>Lukasz</h1>
				<div className={styles.chevron}>
					<ChevronDown />
				</div>
			</div>
			<div className={styles.splitScreen}>
				<SplitScreen />
			</div>
		</div>
	);
};

export default Header;
