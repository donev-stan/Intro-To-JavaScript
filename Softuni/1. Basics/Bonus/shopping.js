const calculateBudget = (array) => {
	const [budget, videoCardsCount, proccessorsCount, ramCount] = array.map(
		(el) => Number(el)
	);

	const priceForVideoCard = 250;

	let totalPrice = 0;
	let videoCardsPrice = 0;
	let proccessorsPrice = 0;
	let ramPrice = 0;

	videoCardsPrice = videoCardsCount * priceForVideoCard;
	proccessorsPrice = proccessorsCount * (videoCardsPrice * (35 / 100));
	ramPrice = ramCount * (videoCardsPrice * (10 / 100));

	totalPrice = videoCardsPrice + proccessorsPrice + ramPrice;

	if (videoCardsCount > proccessorsCount) {
		totalPrice = totalPrice - totalPrice * (15 / 100);
	}

	let moneyOver = budget - totalPrice;

	if (moneyOver > 0) {
		console.log(`You have ${moneyOver.toFixed(2)} leva left!`);
	} else {
		console.log(
			`Not enough money! You need ${moneyOver.toFixed(2)} leva more!`
		);
	}
};

calculateBudget(["900", "2", "1", "3"]);
calculateBudget(["920.45", "3", "1", "1"]);
