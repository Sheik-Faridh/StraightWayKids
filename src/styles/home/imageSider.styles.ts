const imageSliderStyles = () => {
	return `
    height: calc(100vh - 90px);
	& div.marquee {
		width: 100%;
		height: 50px;
		line-height: 50px;
		color: #12344d;
		white-space: nowrap;
		overflow: hidden;
		background-color: #bfcbd4;
		& p {
			display: inline-block;
			padding-left: 100%;
			text-shadow: 5px 10px 6px rgb(0 0 0 / 30%);
			color: #ff0000;
			font-size: 20px;
			animation: marquee 25s linear infinite;
			& span:not(:last-child) {
				padding-right: 50vw;
			}
		}
	}
	& > div.slider-container {
		flex-grow: 1;
		& > div:first-child {
			width: 100%;
			height: 100%;
			overflow: hidden;
			position: absolute;
			& img {
				z-index: -1;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	}
	& .image-text {
		top: 40%;
		left: 50%;
		transform: translate(-50%, -40%);
		text-align: center;
	}

	@media screen and (max-width: 1024px) {
		& > div.slider-container {
			& .image-text {
				font-size: 6vw;
			}
		}
	}
    `;
};

export default imageSliderStyles;
