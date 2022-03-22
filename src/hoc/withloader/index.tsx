import { ComponentType, useLayoutEffect, useState } from 'react';
import Loader from 'components/loader';
import { LoaderProps } from 'typings';

const withLoader = <P extends LoaderProps>(Component: ComponentType<P>) => {
	return (props: P) => {
		const [loading, setLoading] = useState(true);

		const hocProps = { setLoading };

		useLayoutEffect(() => {
			loading
				? document.body.classList.add('overflow-hidden')
				: document.body.classList.remove('overflow-hidden');
		}, [loading]);

		return (
			<>
				{loading && <Loader />}
				<Component {...props} {...hocProps} />
			</>
		);
	};
};

export default withLoader;
