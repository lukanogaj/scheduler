//“All comparisons are calendar-based (local start-of-day). Time-of-day is ignored.”

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
	if (!date) return false;

	const parsed = new Date(date);
	if (isNaN(parsed.getTime())) return false;
	const today = startOfDay(new Date());
	const due = startOfDay(parsed);
	return due < today;
};
