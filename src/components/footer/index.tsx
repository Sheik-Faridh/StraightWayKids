import { useSelector } from 'react-redux';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import { RootState } from 'store';

const Footer = () => {
	const commonDetails = useSelector((state: RootState) => state.common);

	if (!Object.keys(commonDetails).length) return null;
	return (
		<footer>
			<FooterTop />
			<FooterBottom />
		</footer>
	);
};

export default Footer;
