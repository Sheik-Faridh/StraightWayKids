import { useCallback, useEffect, useRef } from 'react';
import type { EffectCallback } from 'react';

const useDebounce = (cb: EffectCallback, delay: number) => {
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const timer = timerRef.current;

	useEffect(() => {
		return () => {
			timer && clearTimeout(timer);
		};
	}, [timer]);

	const debounce = useCallback(
		(arg) => {
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				cb.call(arg);
				timerRef.current = null;
			}, delay);
		},
		[timerRef, delay, cb]
	);

	return debounce;
};

export default useDebounce;
