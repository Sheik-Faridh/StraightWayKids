import { useSelector } from 'react-redux';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import Skeleton from 'components/skeleton';
import { RootState } from 'store';

const Footer = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	if (!Object.keys(commonDetails).length) return <Skeleton.Footer />;

	return (
		<footer>
			<FooterTop />
			<FooterBottom />
		</footer>
	);
};

export default Footer;
