const prospectusStyles = () => {
	return `
    height: 80vh;
	gap: 30px;
	background-image: url(${require('assets/images/home_bg.jpg').default});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
	& div.overlay {
		z-index: 1;
		background-color: #040219;
		opacity: 0.55;
		transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
	}
	& h3 {
		z-index: 2;
		font-size: 1.75rem;
		&::before {
			content: '';
			position: absolute;
			top: 60px;
			left: 50%;
			-webkit-transform: translateX(-50%);
			-ms-transform: translateX(-50%);
			transform: translateX(-50%);
			width: 50%;
			height: 3px;
			background: #46aadc;
		}
	}
	& h1 {
		z-index: 2;
		font-size: 59px;
	}
	& h1.arabic-content {
		z-index: 2;
		word-spacing: 20px;
		letter-spacing: -16px;
	}
    `;
};

export default prospectusStyles;
