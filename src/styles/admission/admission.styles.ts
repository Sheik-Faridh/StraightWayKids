const admissionContainerStyles = () => {
	return `
        margin-top: 90px;
        min-height: calc(100vh - 575px);

        @media screen and (max-width: 600px) {
            padding: 10px;
        }

        & .form-wrapper {
            @media screen and (max-width: 1024px) {
                width: 90%;
            }
            @media screen and (max-width: 768px) {
                width: 96%;
            }
            @media screen and (max-width: 600px) {
                & .fields-wrapper {
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                }
            }
        }
    `;
};

export default admissionContainerStyles;
