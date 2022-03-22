import styled from 'styled-components';
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

const Header = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	if (!Object.keys(commonDetails).length) return null;

	return (
		<AppHeader className='flex items-center justify-around fixed t-0 w-full z-10'>
			<LogoContainer className='flex items-center'>
				<div className='logo-wrapper'>
					<img src={logo} className='w-full h-full' alt='Logo' />
				</div>
				<div className='school-name-wrapper'>
					<h2>{commonDetails.name}</h2>
					<h4>{commonDetails.type}</h4>
				</div>
			</LogoContainer>
			<MenuWrapper className='flex'>
				{menuList.map((list) => (
					<li key={list.name} className='cursor-pointer'>
						{list.name}
					</li>
				))}
			</MenuWrapper>
		</AppHeader>
	);
};

export default Header;
