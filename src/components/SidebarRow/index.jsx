import styles from "./index.module.scss";

const SidebarRow = ({ icon: Icon, label, count, active = false, onClick }) => {
	return (
		<button
			type='button'
			className={`${styles.row} ${active ? styles.active : ""}`}
			onClick={onClick}>
			<div className={styles.left}>
				{Icon && <Icon className={styles.icon} />}
				<span className={styles.label}>{label}</span>
			</div>

			{typeof count === "number" && (
				<span className={styles.count}>{count}</span>
			)}
		</button>
	);
};

export default SidebarRow;
