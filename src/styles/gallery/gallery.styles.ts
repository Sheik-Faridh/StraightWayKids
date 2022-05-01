import galleryBg from 'assets/images/gallery-bg.avif';

const galleryContainerStyles = () => {
	return `
        margin-top: 90px;
        padding: 0;
        min-height: calc(100vh - 575px);

        & > div.image-screen {
            position: relative;
            background-image: url(${galleryBg});
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            height: 50vh;

            & > div {
                left: 80px;
                transform: translate(0, -50%);
            }

            & > div.ant-divider {
                width: 50%;
                min-width: 50%;
                top: 53%;
                border-color: #fff;
            }
        }
    `;
};

export default galleryContainerStyles;
