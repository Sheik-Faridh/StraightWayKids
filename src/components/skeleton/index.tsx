import styled from 'styled-components';
import {
	footerSkeletonContainerStyles,
	headerSkeletonContainerStyles,
} from 'styles/component/skeleton.styles';

const Skeleton = () => {};

const HeaderContainer = styled.div.attrs({
	className: 'flex justify-center fixed top-0 w-full z-10',
})`
	${headerSkeletonContainerStyles}
`;

const FooterContainer = styled.div.attrs({
	className: 'w-full',
})`
	${footerSkeletonContainerStyles}
`;

const Header = () => (
	<HeaderContainer>
		<div className='animate-pulse flex items-center justify-around h-full'>
			<div className='flex gap-5'>
				<div className='rounded-full bg-slate-200 h-14 w-14'></div>
				<div className='flex-1 space-y-5'>
					<div className='w-6/12 h-4 bg-slate-200 rounded'></div>
					<div className='w-4/12 h-3 bg-slate-200 rounded'></div>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div className='h-3 bg-slate-200 rounded'></div>
				<div className='h-3 bg-slate-200 rounded'></div>
				<div className='h-3 bg-slate-200 rounded'></div>
			</div>
		</div>
	</HeaderContainer>
);

const Footer = () => (
	<FooterContainer>
		<div className='animate-pulse footer-top flex items-center justify-center h-full'>
			<div className='flex items-center justify-around gap-10'>
				<div className='flex flex-col basis-full gap-5'>
					<div className='flex basis-full gap-5'>
						<div className='rounded-full bg-slate-200 h-14 w-14'></div>
						<div className='flex-1 space-y-5'>
							<div className='w-6/12 h-4 bg-slate-200 rounded'></div>
							<div className='w-4/12 h-3 bg-slate-200 rounded'></div>
						</div>
					</div>
					<div className='space-y-4'>
						<div className='h-3 bg-slate-200 rounded'></div>
						<div className='h-3 bg-slate-200 rounded'></div>
						<div className='h-3 bg-slate-200 rounded'></div>
						<div className='h-3 bg-slate-200 rounded'></div>
					</div>
				</div>
				<div className='basis-full grid grid-cols-2 grid-row-3 gap-10 place-content-center'>
					<div className='h-3 bg-slate-200 rounded'></div>
					<div className='h-3 bg-slate-200 rounded'></div>
					<div className='h-3 bg-slate-200 rounded'></div>
					<div className='h-3 bg-slate-200 rounded'></div>
					<div className='h-3 bg-slate-200 rounded'></div>
					<div className='h-3 bg-slate-200 rounded'></div>
				</div>
			</div>
		</div>
		<div className='animate-pulse footer-bottom flex items-center justify-around h-full'>
			<div className='grid grid-cols-2 gap-4 place-content-center'>
				<div className='h-4 bg-slate-200 rounded'></div>
				<div className='h-4 bg-slate-200 rounded'></div>
			</div>
		</div>
	</FooterContainer>
);

Skeleton.Header = Header;
Skeleton.Footer = Footer;

export default Skeleton;
