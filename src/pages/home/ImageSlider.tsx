import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import schoolData from 'mock/school.json';

const Container = styled.section`
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
		& > div:nth-child(2) {
			font-size: 6em;
			font-family: National-Book, National-Medium, sans-serif;
		}
	}
`;

const ImageSlider = () => {
	const flash = schoolData.home_page.flash;
	const sliderList = schoolData.home_page.sliderImages;
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
		<Container className='flex flex-col w-screen'>
			{flash.length && (
				<div className='marquee'>
					<p>
						{flash.map((n, i) => (
							<span key={i}>{n}</span>
						))}
					</p>
				</div>
			)}
			<div className='slider-container relative w-full'>
				<TransitionGroup>
					<CSSTransition
						classNames='slide'
						timeout={{ enter: 5000, exit: 5000 }}
						key={sliderList[index].name}
					>
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
		</Container>
	);
};

export default ImageSlider;
