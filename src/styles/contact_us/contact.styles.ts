const contactContainerStyles = () => {
	return `
        flex-basis: 70%;
        padding: 40px;
        background-color: #dbe6ef;

        & p {
            margin-bottom: 12px;
        }

        & svg {
            display: inline-block;
            width: 40px;
            height: 40px;
            margin-right: 10px;

            &.mail-icon {
                color: #ff4f4f;
            }

            &.phone-icon {
                color: #0658d3;
            }

            &.time-icon {
                color: #4b5563;
            }
        }

        & div.details {
            position: relative;
            left: 50px;
        }
    `;
};

export default contactContainerStyles;
