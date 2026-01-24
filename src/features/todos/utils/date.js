export const isSameDay = (a, b) => {
	const d1 = new Date(a);
	const d2 = new Date(b);

	return (
		d1.getFullYear() === d2.getFullYear() &&
		d1.getMonth() === d2.getMonth() &&
		d1.getDate() === d2.getDate()
	);
};

export const isToday = (date) => {
	return isSameDay(date, new Date());
};

export const isOverdue = (date) => {
	const d = new Date(date);
	const today = new Date();
	// normalize today to start of day
	today.setHours(0, 0, 0, 0);
	return d < today;
};
