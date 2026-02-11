import { useEffect, useMemo, useState } from "react";
import styles from "./DateTimeClock.module.scss";

const formatDateTime = (now) => {
	// Guard: ensure valid date
	if (!(now instanceof Date) || isNaN(now)) {
		return { date: "", time: "" };
	}

	// ----- Date using formatToParts (safe) -----
	const dateFormatter = new Intl.DateTimeFormat("en-GB", {
		weekday: "short",
		day: "2-digit",
		month: "long",
	});

	const parts = dateFormatter.formatToParts(now);

	const weekday = parts.find((p) => p.type === "weekday")?.value;
	const day = parts.find((p) => p.type === "day")?.value;
	const month = parts.find((p) => p.type === "month")?.value;

	const date = `${weekday} ${day}, ${month}`;

	// ----- Time -----
	const time = new Intl.DateTimeFormat("en-GB", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	})
		.format(now)
		.toLowerCase();

	return { date, time };
};

const DateTimeClock = () => {
	const [now, setNow] = useState(() => new Date());

	useEffect(() => {
		const id = setInterval(() => {
			setNow(new Date());
		}, 30_000);

		return () => clearInterval(id);
	}, []);

	const { date, time } = useMemo(() => formatDateTime(now), [now]);

	return (
		<div className={styles.dateTime}>
			<div className={styles.date}>
				<h2 className={styles.headDate}>{date}</h2>
			</div>
			<div className={styles.time}>
				<h2 className={styles.headTime}>{time}</h2>
			</div>
		</div>
	);
};

export default DateTimeClock;
