const loaderContainerStyles = () => {
	return `
    min-height: calc(100vh + 90px);
	top: 90px;
	background-color: #d0d7df;

	& .spinner-wrapper {
		bottom: 90px;

		& svg {
			fill: #1b81ff;
		}
	}
    `;
};

export default loaderContainerStyles;
