function calculateTomSleep(daysVacation) {
	const tolerablePlayTime = 30000;

	const vacationPlayInMins = 127;
	const workPlayInMins = 63;

	let totalVacationPlayTime = daysVacation * vacationPlayInMins;
	// console.log(totalVacationPlayTime);

	let totalWorkPlayTime = (365 - daysVacation) * workPlayInMins;
	// console.log(totalWorkPlayTime);

	let totalPlayTime = totalVacationPlayTime + totalWorkPlayTime;
	// console.log(totalPlayTime);

	if (totalPlayTime > tolerablePlayTime) {
		console.log("Tom will run away");
		console.log(
			`Play time over the norm: ${
				totalPlayTime - tolerablePlayTime
			} minutes.`
		);
	} else {
		console.log("Tom will run away");
		console.log(
			`${tolerablePlayTime - totalPlayTime} minutes more to play.`
		);
	}
}

calculateTomSleep(20);
calculateTomSleep(113);
