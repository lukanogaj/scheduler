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
		viewBox='0 0 13 13'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M8.98625 8.50687L6.5 6.02603L4.01375 8.50687L3.25 7.74312L6.5 4.49312L9.75 7.74312L8.98625 8.50687Z' />
	</svg>
);
export const Search = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		width='40'
		height='40'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'>
		<path d='m21 21-4.34-4.34' />
		<circle
			cx='11'
			cy='11'
			r='8'
		/>
	</svg>
);
export const Sun = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		width='40'
		height='40'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'>
		<circle
			cx='12'
			cy='12'
			r='4'
		/>
		<path d='M12 2v2' />
		<path d='M12 20v2' />
		<path d='m4.93 4.93 1.41 1.41' />
		<path d='m17.66 17.66 1.41 1.41' />
		<path d='M2 12h2' />
		<path d='M20 12h2' />
		<path d='m6.34 17.66-1.41 1.41' />
		<path d='m19.07 4.93-1.41 1.41' />
	</svg>
);
export const Grid = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		width='40'
		height='40'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}>
		<rect
			width='7'
			height='7'
			x='3'
			y='3'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='14'
			y='3'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='14'
			y='14'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='3'
			y='14'
			rx='1'
		/>
	</svg>
);

export const Menu = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		width='42'
		height='42'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={3}>
		<path d='M3 5h1' />
		<path d='M3 12h1' />
		<path d='M3 19h1' />
		<path d='M8 5h1' />
		<path d='M8 12h1' />
		<path d='M8 19h1' />
		<path d='M13 5h8' />
		<path d='M13 12h8' />
		<path d='M13 19h8' />
	</svg>
);

export const NotesIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}>
		<path d='M8 2v4' />
		<path d='M12 2v4' />
		<path d='M16 2v4' />
		<rect
			width='16'
			height='18'
			x='4'
			y='4'
			rx='2'
		/>
		<path d='M8 10h6' />
		<path d='M8 14h8' />
		<path d='M8 18h5' />
	</svg>
);
export const Hash = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='48'
		height='48'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}>
		<line
			x1='4'
			x2='20'
			y1='9'
			y2='9'
		/>
		<line
			x1='4'
			x2='20'
			y1='15'
			y2='15'
		/>
		<line
			x1='10'
			x2='8'
			y1='3'
			y2='21'
		/>
		<line
			x1='16'
			x2='14'
			y1='3'
			y2='21'
		/>
	</svg>
);
export const Plus = (props) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='64'
		height='64'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={1}>
		<path d='M5 12h14' />
		<path d='M12 5v14' />
	</svg>
);
export const MenuFilter = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='44'
		height='44'
		viewBox='0 0 24 24'
		fill='none'
		stroke='#DBDDE1'
		strokeWidth={2}>
		<path d='M3 5h18' />
		<path d='M3 12h18' />
		<path d='M3 19h18' />
	</svg>
);

export const SplitScreen = (props) => (
	<svg
		viewBox='0 0 24 24'
		width='24'
		height='24'
		role='img'
		aria-hidden='false'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<title>Vertical split</title>
		<rect
			x='2'
			y='4'
			width='20'
			height='16'
			rx='2'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<line
			x1='12'
			y1='4'
			x2='12'
			y2='20'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const CheckboxNotChecked = (props) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z' />
	</svg>
);

export const CheckboxChecked = (props) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z' />
	</svg>
);

export const DeleteIcon = (props) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'
		{...props}>
		<path d='M14.12 10.47L12 12.59L9.87 10.47L8.46 11.88L10.59 14L8.47 16.12L9.88 17.53L12 15.41L14.12 17.53L15.53 16.12L13.41 14L15.53 11.88L14.12 10.47ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z' />
	</svg>
);

<svg
	xmlns='http://www.w3.org/2000/svg'
	width='24'
	height='24'
	viewBox='0 0 24 24'
	fill='none'
	stroke='currentColor'
	stroke-width='2'
	stroke-linecap='round'
	stroke-linejoin='round'>
	<path d='m21 21-4.34-4.34' />
	<circle
		cx='11'
		cy='11'
		r='8'
	/>
</svg>;
