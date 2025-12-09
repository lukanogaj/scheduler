import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";

const DateTimeClock = () => {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDate(new Date()), 30000);
	}, []);
	return (
		<div className={styles.dateTimeClock}>
			{" "}
			<div className={styles.dateTime}>
				<div className={styles.date}>
					<div className={styles.headDate}>
						<p>
							{" "}
							{date.toLocaleDateString("en-GB", {
								weekday: "short",
								day: "numeric",
								month: "short",
								year: "numeric",
							})}
						</p>
					</div>
				</div>
				<div className={styles.time}>
					<div className={styles.headTime}>
						<p>
							{date
								.toLocaleString("en-US", {
									hour: "numeric",
									minute: "numeric",
									hour12: true,
								})
								.toLocaleLowerCase()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DateTimeClock;
