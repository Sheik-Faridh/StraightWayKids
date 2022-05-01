const contactContainerStyles = () => {
	return `
        flex-basis: 70%;
        padding: 40px;
        background-color: #e8eff5;

        @media screen and (max-width: 1326px) {
            flex-basis: 85%;
            padding: 20px;
        }

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
