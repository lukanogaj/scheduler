import styles from "./index.module.scss";
import searchIcon from "../../images/search.png";

const SearchControl = () => {
	return (
		<div className={styles.search}>
			<img
				src={searchIcon}
				alt='search'
			/>
			<input
				type='search'
				placeholder='Search'
				name='search'
			/>
		</div>
	);
};

export default SearchControl;
