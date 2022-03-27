import styled from 'styled-components';
import contactUsData from 'mock/contact_us.json';
import mapContainerStyles from 'styles/contact_us/map.styles';

const Container = styled.div`
	${mapContainerStyles}
`;

const Map = () => {
	const mapIframeUrl = `https://maps.google.com/maps?q=${contactUsData.address}&t=m&z=15&output=embed&iwloc=near`;
	return (
		<Container>
			<div className='google-map-wrapper'>
				<iframe
					frameBorder='0'
					scrolling='no'
					src={encodeURI(mapIframeUrl)}
					title={contactUsData.address}
					aria-label={contactUsData.address}></iframe>
			</div>
		</Container>
	);
};

export default Map;
