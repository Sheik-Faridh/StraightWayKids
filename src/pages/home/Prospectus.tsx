import styled from 'styled-components';
import { useSelector } from 'react-redux';
import prospectusStyles from 'styles/home/prospectus.styles';
import { RootState } from 'store';

const Container = styled.section`
	${prospectusStyles}
`;
const Prospectus = () => {
	const prospectus = useSelector((state: RootState) => state.home.prospectus);
	return (
		<Container className='w-screen flex items-center justify-center flex-col relative prospectus-container'>
			<div className='overlay absolute w-full h-full'></div>
			<h3 className='versus text-white relative'>{prospectus.versus}</h3>
			<h1 className='arabic-content text-white'>{prospectus.arabic_content}</h1>
			<h1 className='english-content text-white'>
				<blockquote>{prospectus.english_content}</blockquote>
			</h1>
		</Container>
	);
};

export default Prospectus;
