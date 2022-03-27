import mapContainerBg from 'assets/images/map_container_bg.avif';

const mapContainerStyles = () => {
	return `
        flex-basis: 100%;
        display: flex;
        justify-content: center;

        & > div.google-map-wrapper {
            width: 100%;
            padding: 30px;
            height: 100%;
            background-image: url(${mapContainerBg});
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
            
            & > iframe {
                width: 100%;
                height: 100%;
                filter: brightness( 50% ) contrast( 98% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );

                &:hover {
                    filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
                }
            }
        }
    `;
};

export default mapContainerStyles;
