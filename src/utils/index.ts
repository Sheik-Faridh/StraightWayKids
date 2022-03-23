export const classnames = (obj: object): string =>
	Object.entries(obj)
		.map(([k, v]) => (v ? k : ''))
		.join(' ');
