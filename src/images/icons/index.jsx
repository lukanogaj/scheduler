export const ChevronDown = (props) => (
	<svg
		width='13'
		height='13'
		viewBox='0 0 13 13'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M4.01375 4.49313L6.5 6.97397L8.98625 4.49313L9.75 5.25688L6.5 8.50688L3.25 5.25688L4.01375 4.49313Z' />
	</svg>
);

export const ChevronUp = (props) => (
	<svg
		width='13'
		height='13'
		viewBox='0 0 23 13'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M8.98625 8.50687L6.5 6.02603L4.01375 8.50687L3.25 7.74312L6.5 4.49312L9.75 7.74312L8.98625 8.50687Z' />
	</svg>
);

export const SplitScreen = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='24'
		height='24'
		role='img'
		aria-hidden='false'>
		<title>Vertical split</title>
		<rect
			x='2'
			y='4'
			width='20'
			height='16'
			rx='2'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
		<line
			x1='12'
			y1='4'
			x2='12'
			y2='20'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		/>
	</svg>
);
