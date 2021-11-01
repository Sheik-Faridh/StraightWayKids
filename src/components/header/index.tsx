import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import schoolData from 'mock/school.json';
import { MenuLink } from 'typings';

const AppHeader = styled.header`
  padding: 10px 50px;
  background-color: ${(props) => props.theme.primaryBg};
  height: 90px;
`;

const LogoContainer = styled.div`
  gap: 10px;
  & div.logo-wrapper {
    width: 70px;
    height: 70px;
  }
  & div.school-name-wrapper {
    color: ${(props) => props.theme.primaryColor};
    & h2 {
      font-size: 3.2rem;
      font-family: 'Arabic';
      line-height: 0.9;
    }
    & h4 {
      font-size: 1.5rem;
      font-family: 'Arabic';
      line-height: 1.4;
    }
  }
`;

const MenuWrapper = styled.ul`
  gap: 20px;
  color: ${(props) => props.theme.primaryColor};
  & li {
    &:hover {
      color: ${(props) => props.theme.primaryHoverColor};
    }
  }
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
  return (
    <AppHeader className='flex items-center justify-around fixed t-0 w-full z-10'>
      <LogoContainer className='flex items-center'>
        <div className='logo-wrapper'>
          <img src={logo} className='w-full h-full' alt='Logo' />
        </div>
        <div className='school-name-wrapper'>
          <h2>{schoolData.name}</h2>
          <h4>{schoolData.type}</h4>
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
