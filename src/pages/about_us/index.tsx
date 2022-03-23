import styled from 'styled-components';
import Mission from './mission';
import Pillars from './pillars';
import Statement from './statement';
import Vision from './vision';
import aboutUsContainerStyles from 'styles/about_us/about_us.styles';

const AboutUsContainer = styled.section.attrs({
	className: 'w-screen min-h-screen p-10',
})`
	${aboutUsContainerStyles}
`;

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<div className='flex flex-col gap-10'>
				<Statement />
				<div className='flex flex-row'>
					<Vision />
					<Mission />
				</div>
				<Pillars />
			</div>
		</AboutUsContainer>
	);
};

export default AboutUs;
