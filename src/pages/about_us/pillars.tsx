import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import { RootState } from 'store';
import aboutUsData from 'mock/about.json';
import pillarsContainerStyles from 'styles/about_us/pillars.styles';

const Container = styled.div.attrs({
	className: 'py-5 px-8 rounded-md',
})`
	${pillarsContainerStyles}
`;

const Pillars = () => {
	const rootState = useSelector((state: RootState) => state);
	const { common } = rootState;
	return (
		<Container>
			<h2 className='text-3xl mb-4 text-center'>
				The Pillars of {common.name} {common.type}
			</h2>
			<div className='card-container flex gap-8 py-5'>
				{aboutUsData.pillars.map((p) => (
					<div
						key={p.name}
						className='card shadow-xl text-white rounded-md tracking-widest p-10 transform transition duration-500 hover:scale-105'>
						<h4 className='text-2xl mb-4'>{p.name}</h4>
						<div className='icon-wrapper my-5'>
							<img
								className='w-full h-full'
								src={require(`../../assets/icons/${p.category}.svg`).default}
								alt={p.category}
							/>
						</div>
						<div
							className='descriptive-content font-light'
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(p.description),
							}}
						/>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Pillars;
