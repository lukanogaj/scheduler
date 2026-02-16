const startOfDay = (date) => {
	const d = new Date(date);
	d.setHours(0, 0, 0, 0);
	return d;
};

export const isSameDay = (a, b) => {
	const d1 = startOfDay(a);
	const d2 = startOfDay(b);

	return d1.getTime() === d2.getTime();
};

export const isToday = (date) => {
	return isSameDay(date, new Date());
};

export const isOverdue = (date) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const due = new Date(date);
	due.setHours(0, 0, 0, 0);

	return due < today;
};
