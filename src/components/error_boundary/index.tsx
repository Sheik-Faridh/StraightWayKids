import { Component, ErrorInfo, ReactNode } from 'react';
import { Result } from 'antd';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

const Container = styled.section.attrs({
	className: 'w-screen h-screen flex items-center justify-center',
})`
	background-color: #e8ebed;
`;

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true, error: _ };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<Container>
					<div className='bg-white shadow-lg rounded p-10'>
						<Result
							status='error'
							title='Unexpected error'
							subTitle='We are working on fixing the problem. Be back soon.'></Result>
					</div>
				</Container>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
