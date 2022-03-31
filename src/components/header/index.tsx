import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from 'components/skeleton';
import { classnames } from 'utils';
import logo from 'assets/images/logo.png';
import { MenuLink } from 'typings';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
	appHeaderStyles,
	logoContainerStyles,
	menuWrapperStyles,
} from 'styles/layout/header.styles';

const AppHeader = styled.header`
	${appHeaderStyles}
`;

const LogoContainer = styled.div`
	${logoContainerStyles}
`;

const MenuWrapper = styled.ul`
	${menuWrapperStyles}
`;

const menuList: MenuLink[] = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'About Us',
		path: '/about-us',
	},
	{
		name: 'Admission',
		path: '/admission',
	},
	{
		name: 'Gallery',
		path: '/gallery',
	},
	{
		name: 'NewsLetter',
		path: '/newsletter',
	},
	{
		name: 'Franchise',
		path: '/franchise',
	},
	{
		name: 'Contact Us',
		path: '/contact-us',
	},
];

const Link = ({ name, path }: MenuLink) => {
	const history = useHistory();
	const { pathname } = useLocation();

	const handleClick = () => {
		history.push(path);
	};

	return (
		<li
			key={name}
			className={classnames({
				'cursor-pointer': true,
				'text-lg': true,
				active: pathname === path,
			})}
			onClick={handleClick}>
			{name}
		</li>
	);
};

const Header = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	if (!Object.keys(commonDetails).length) return <Skeleton.Header />;

	return (
		<AppHeader className='flex items-center justify-around fixed top-0 w-full z-10'>
			<LogoContainer className='flex items-center'>
				<div className='logo-wrapper'>
					<img src={logo} className='w-full h-full' alt='Logo' />
				</div>
				<div className='school-name-wrapper'>
					<h2 className='text-white m-0'>{commonDetails.name}</h2>
					<h4 className='text-white m-0'>{commonDetails.type}</h4>
				</div>
			</LogoContainer>
			<MenuWrapper className='flex m-0'>
				{menuList.map((list) => (
					<Link key={list.name} {...list} />
				))}
			</MenuWrapper>
		</AppHeader>
	);
};

export default Header;
