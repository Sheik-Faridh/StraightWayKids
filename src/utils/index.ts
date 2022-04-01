export const classnames = (obj: object): string =>
	Object.entries(obj)
		.map(([k, v]) => (v ? k : ''))
		.join(' ')
		.trim();

export const scrollTo = (top = 0, left = 0) =>
	window.scrollTo({
		top,
		left,
		behavior: 'smooth',
	});
