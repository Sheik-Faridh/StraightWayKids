import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import imageSliderStyles from 'styles/home/imageSider.styles';
import { RootState } from 'store';

const Container = styled.section`
	${imageSliderStyles}
`;

const ImageSlides = () => {
	const sliderList = useSelector((state: RootState) => state.home.sliderImages);
	const sliderListLength = sliderList.length - 1;
	const [index, setIndex] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prevState) =>
				prevState >= sliderListLength ? 0 : prevState + 1
			);
		}, 5000);
		return () => clearInterval(timer);
	}, [sliderListLength]);

	return (
		<div className='slider-container relative w-full'>
			<TransitionGroup>
				<CSSTransition
					classNames='slide'
					timeout={{ enter: 5000, exit: 5000 }}
					key={sliderList[index].name}>
					<img
						className='w-full h-full object-cover'
						src={require(`assets/images/${sliderList[index].name}`).default}
						alt={sliderList[index].name}
					/>
				</CSSTransition>
			</TransitionGroup>
			<div className='absolute flex items-center justify-center w-full h-full text-white'>
				{sliderList[index].content}
			</div>
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
