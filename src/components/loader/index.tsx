import styled from 'styled-components';
import { PositionProps } from 'typings';
import './style.css';

const PreloaderSector = styled.div`
	transform: rotateY(${(props: PositionProps) => 12 * (props.position - 1)}deg)
		translateZ(7rem) !important;
`;

const Loader = () => {
	const text = 'Loading...';
	const rings = 2;
	const ringSectors = 30;

	return (
		<section className='w-screen h-screen flex items-center justify-center loader-container fixed'>
			<div className='preloader'>
				{Array.from({ length: rings }, (_, index) => index + 1).map((p) => (
					<div key={p} className='preloader__ring'>
						{Array.from({ length: ringSectors }, (_, index) => index + 1).map(
							(s, i) => (
								<PreloaderSector
									key={s}
									className='preloader__sector'
									position={s}
								>
									{text[i] || ''}
								</PreloaderSector>
							)
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Loader;
