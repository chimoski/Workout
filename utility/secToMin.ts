export const secToMin = (sec: number) => {
	const min = Math.floor(sec / 60);
	const _sec = sec % 60;
	if (_sec < 1 && min > 0) {
		return `${min} ${min > 1 ? "mins" : "min"}`;
	} else if (min < 1) {
		return `${_sec} ${_sec > 1 ? "secs" : "sec"}`;
	} else {
		return `${min} ${min > 1 ? "mins" : "min"} and ${_sec} ${
			_sec > 1 ? "secs" : "sec"
		}`;
	}
};
