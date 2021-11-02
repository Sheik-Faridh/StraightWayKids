import styled from 'styled-components';
import schoolData from 'mock/school.json';

const Container = styled.section`
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
const Prospectus = () => {
	return (
		<Container className='w-screen flex items-center justify-center flex-col relative prospectus-container'>
			<div className='overlay absolute w-full h-full'></div>
			<h3 className='versus text-white relative'>
				{schoolData.home_page.prospectus.versus}
			</h3>
			<h1 className='arabic-content text-white'>
				{schoolData.home_page.prospectus.arabic_content}
			</h1>
			<h1 className='english-content text-white'>
				<blockquote>
					{schoolData.home_page.prospectus.english_content}
				</blockquote>
			</h1>
		</Container>
	);
};

export default Prospectus;
