import { useEffect } from 'react';
import withLoader from 'hoc/withloader';
import { LoaderProps } from 'typings';

const Home = ({ setLoading }: LoaderProps) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return <div className='w-screen min-h-screen'></div>;
};

export default withLoader(Home);
