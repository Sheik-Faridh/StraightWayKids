import { useEffect } from 'react';
import styled from 'styled-components';
import withLoader from 'hoc/withloader';
import { LoaderProps } from 'typings';
import Curriculum from './Curriculum';

const HomeContainer = styled.div`
  padding: 90px 25px 0;
`;

const Home = ({ setLoading }: LoaderProps) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <HomeContainer className='w-screen min-h-screen'>
      <Curriculum />
    </HomeContainer>
  );
};

export default withLoader(Home);
