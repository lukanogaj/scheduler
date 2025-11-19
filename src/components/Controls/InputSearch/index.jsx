import styles from "./index.module.scss";

const SearchControl = () => {
	return (
		<div className={styles.search}>
			<input
				type='search'
				placeholder='Search'
				name='search'
			/>
		</div>
	);
};

export default SearchControl;
