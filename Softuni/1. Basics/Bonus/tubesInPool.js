const calculate = (totalPoolVolume, p1, p2, hours) => {
	let p1volume = p1 * hours;
	let p2volume = p2 * hours;

	let totalVolume = p1volume + p2volume;

	let totalVolumeInPercents = (100 * totalVolume) / totalPoolVolume;

	let p1volumeInPercents = (100 * p1volume) / totalVolume;
	let p2volumeInPercents = (100 * p2volume) / totalVolume;

	if (totalVolume < totalPoolVolume) {
		console.log(
			`The pool is ${totalVolumeInPercents}% full. 
             Pipe 1: ${p1volumeInPercents.toFixed(2)}%. 
             Pipe 2: ${p2volumeInPercents.toFixed(2)}%.`
		);
	} else {
		console.log(
			`For ${hours} hours the pool overflows with ${
				totalVolume - totalPoolVolume
			} liters.`
		);
	}
};

calculate(1000, 100, 120, 3);
calculate(100, 100, 100, 2.5);
