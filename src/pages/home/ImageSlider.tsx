import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Carousel } from 'antd';
import imageSliderStyles from 'styles/home/imageSider.styles';
import { RootState } from 'store';

const Container = styled.section`
	${imageSliderStyles}
`;

const ImageSlides = () => {
	const sliderList = useSelector((state: RootState) => state.home.sliderImages);

	return (
		<div className='slider-container relative w-full'>
			<Carousel autoplay dots={false}>
				{sliderList.map((s, i) => (
					<div key={i} className='image-slider relative h-screen'>
						<div className='image-wrapper'>
							<img
								className='w-full h-full object-cover'
								src={require(`assets/images/${s.name}`).default}
								alt={s.name}
							/>
						</div>
						<div className='absolute flex items-center justify-center w-full h-full text-white text-6xl'>
							{s.content}
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

const FlashNews = () => {
	const flash = useSelector((state: RootState) => state.home.flash);

	if (!flash.length) return <></>;

	return (
		<div className='marquee'>
			<p>
				{flash.map((n, i) => (
					<span key={i}>{n}</span>
				))}
			</p>
		</div>
	);
};

const ImageSlider = () => {
	return (
		<Container className='flex flex-col w-screen'>
			<FlashNews />
			<ImageSlides />
		</Container>
	);
};

export default ImageSlider;
