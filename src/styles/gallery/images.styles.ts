const imagesContainerStyles = () => {
	return `
        background-color: #cfdbe1;
        
        & .column {
            flex: calc(100% / 3);
            max-width: calc(100% / 3);
            padding: 0 4px;

            & img {
                margin-top: 8px;
                vertical-align: middle;
                width: 100%;
            }
        }
    `;
};

export default imagesContainerStyles;
