const videoContainerStyles = () => {
	return `
    & .img-wrapper {
		z-index: -2;
	}
	& .overlay {
		background-color: #000408;
		opacity: 0.8;
		transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
		z-index: -1;
	}
	& h2 {
		font-size: 3em;
		color: #fff;
	}
	& p {
		color: #fff;
	}
    `;
};

export default videoContainerStyles;
