import { useEffect } from 'react';
import styled from 'styled-components';
import withLoader from 'hoc/withloader';
import Prospectus from './Prospectus';
import Curriculum from './Curriculum';
import BoardofSchool from './BoardofSchool';
import { LoaderProps } from 'typings';
import ImageSlider from './ImageSlider';

const HomeContainer = styled.div`
	padding: 90px 0 0;
	& > div {
		padding: 60px 20px;
		background-color: #eff3f6;
	}
`;

const Home = ({ setLoading }: LoaderProps) => {
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<HomeContainer className='w-screen min-h-screen'>
			<ImageSlider />
			<Prospectus />
			<Curriculum />
			<BoardofSchool />
		</HomeContainer>
	);
};

export default withLoader(Home);
