import { useCallback, useLayoutEffect, useState } from 'react';
import useDebounce from './usedebounce';

const getWindowWidth = () => window.screen.width;

// mediaQuery should look like max-width: 1024px or min-width: 1024px
const useBreakPoint = (mediaQuery: string) => {
	const isBreakPointMatched = useCallback((query: string): boolean => {
		const [condition, screenSize] = query.split(':').map((s) => s.trim());
		const currentScreenSize = getWindowWidth();
		const size = Number(screenSize.replace('px', ''));
		return condition.toLowerCase() === 'max-width'
			? currentScreenSize <= size
			: currentScreenSize >= size;
	}, []);

	const [matches, setMatches] = useState(() => isBreakPointMatched(mediaQuery));

	const handleResize = useCallback(() => {
		const val = isBreakPointMatched(mediaQuery);
		setMatches(val);
	}, [isBreakPointMatched, mediaQuery]);

	const debouncedResize = useDebounce(handleResize, 250);

	useLayoutEffect(
		() => {
			window.addEventListener('resize', debouncedResize);

			return () => window.removeEventListener('resize', debouncedResize);
		},
		// eslint-disable-next-line
		[]
	);

	return matches;
};

export default useBreakPoint;
