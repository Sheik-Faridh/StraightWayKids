import { useEffect, useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import withLoader from 'hoc/withloader';
import Prospectus from './Prospectus';
import Curriculum from './Curriculum';
import BoardofSchool from './BoardofSchool';
import { LoaderProps } from 'typings';
import ImageSlider from './ImageSlider';
import Video from './Video';
import { fetchHomePageData } from 'store/actions/home.actions';
import homeContainerStyles from 'styles/home/home.styles';
import { RootState } from 'store';

const HomeContainer = styled.div`
	${homeContainerStyles}
`;

const Home: React.FC<LoaderProps> = ({ setLoading }) => {
	const rootState = useSelector((state: RootState) => state);
	const { home, common } = rootState;
	const hideLoader = useMemo(
		() =>
			Object.keys(home).length && Object.keys(common).length ? true : false,
		[home, common]
	);

	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchHomePageData());
		},
		//eslint-disable-next-line
		[]
	);

	useLayoutEffect(
		() => {
			if (hideLoader) setLoading(false);
		},
		//eslint-disable-next-line
		[hideLoader]
	);

	return hideLoader ? (
		<HomeContainer className='w-screen min-h-screen'>
			<ImageSlider />
			<Prospectus />
			<Video />
			<Curriculum />
			<BoardofSchool />
		</HomeContainer>
	) : null;
};

export default withLoader(Home);
