import { useEffect, useRef, useState } from "react";

export const useCountDown = (idx: number, initialCount: number = -1) => {
	const [countDown, setCountDown] = useState(initialCount);
	const [isCounting, setIsCounting] = useState(false);

	const intervalRef = useRef<number>();
	useEffect(() => {
		if (idx === -1) {
			return;
		}

		if (isCounting && !intervalRef.current) {
			intervalRef.current = window.setInterval(() => {
				setCountDown((count) => {
					return count - 1;
				});
			}, 1000);
		}

		return cleanUp;
	}, [idx, isCounting]);

	// useEffect(() => {
	// 	setCountDown(initialCount);
	// }, [initialCount]);
	useEffect(() => {
		if (countDown === 0) {
			cleanUp();
		}
	}, [countDown]);

	function cleanUp() {
		if (intervalRef.current) {
			setIsCounting(false);
			window.clearInterval(intervalRef.current);
			intervalRef.current = undefined;
		}
	}

	return {
		countDown,
		isCounting,
		cleanUp,
		start: (count?: number) => {
			setCountDown(count ?? initialCount);
			setIsCounting(true);
		},
		stop: cleanUp,
	};
};
