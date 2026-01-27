import styles from "./index.module.scss";
import { Search } from "../../images/icons";

const InputSearch = () => {
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Search'
				name='search'
				className={styles.input}
			/>
			<Search className={styles.searchIcon} />
		</div>
	);
};

export default InputSearch;
