const plus15min = ([hours, minutes]) => {
	hours = Number(hours);
	minutes = Number(minutes);

	const addMinutes = 15;

	if (minutes > 44) {
		// Calculate minutes
		minutes = minutes + addMinutes - 60;

		// Calculate hours
		if (hours === 23) hours = 0;
		else hours++;
	} else {
		minutes += addMinutes;
	}

	// Add zero if minutes < 10
	if (minutes < 10) minutes = `0${minutes}`;

	return `${hours}:${minutes}`;
};

console.log(plus15min(["1", "46"]));
console.log(plus15min(["0", "01"]));
console.log(plus15min(["23", "59"]));
console.log(plus15min(["11", "08"]));
console.log(plus15min(["12", "49"]));
