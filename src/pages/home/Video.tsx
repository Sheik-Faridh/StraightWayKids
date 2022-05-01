import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import videoBg from 'assets/images/video-bg.jpg';
import videoContainerStyles from 'styles/home/video.styles';

const Container = styled.section`
	${videoContainerStyles}
`;

const Video = () => {
	const video = useSelector((state: RootState) => state.home.video);

	return (
		<Container className='w-screen h-screen'>
			<div className='flex w-full h-full items-center justify-center relative'>
				<div className='img-wrapper absolute w-full h-full'>
					<img className='w-full h-full' src={videoBg} alt='bg' />
				</div>
				<div className='overlay absolute w-full h-full'></div>
				<div className='flex justify-center gap-5 video-wrapper'>
					<div className='basis-full grid place-items-center'>
						<iframe
							src='https://www.youtube.com/embed/H_kVw_CHdoo'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					</div>
					<div className='basis-full grid place-items-center text-wrapper'>
						<h2>{video.quotes}</h2>
						<p>
							<strong>{video.quotes_in}</strong>
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Video;
