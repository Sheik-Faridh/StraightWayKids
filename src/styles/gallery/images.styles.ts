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

        @media screen and (max-width: 768px) {
            padding: 15px;

            & .column {
                flex: calc(100% / 2);
                max-width: calc(100% / 2);
                padding: 0 4px;
            }
        }

        @media screen and (max-width: 375px) {
            & .column {
                flex: 100%;
                max-width: 100%;
                padding: 0 4px;
            }
        }
    `;
};

export default imagesContainerStyles;
