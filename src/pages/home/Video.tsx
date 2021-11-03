import styled from 'styled-components';
import schoolData from 'mock/school.json';

const Container = styled.section`
	& .img-wrapper {
		z-index: -2;
	}
	& .overlay {
		background-color: #000408;
		opacity: 0.8;
		transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
		z-index: -1;
	}
	& h2 {
		font-size: 3em;
		color: #fff;
	}
	& p {
		color: #fff;
	}
`;

const Video = () => {
	const { video } = schoolData.home_page;

	return (
		<Container className='w-screen h-screen'>
			<div className='flex w-full h-full items-center justify-center relative'>
				<div className='img-wrapper absolute w-full h-full'>
					<img
						className='w-full h-full'
						src={require(`assets/${video.bg}`).default}
						alt='bg'
					/>
				</div>
				<div className='overlay absolute w-full h-full'></div>
				<div className='flex justify-center w-1/2'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/H_kVw_CHdoo'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div className='w-1/2'>
					<h2>{video.quotes}</h2>
					<p>
						<strong>{video.quotes_in}</strong>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Video;
