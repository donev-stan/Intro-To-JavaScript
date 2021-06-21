const events = {};

module.exports = {
	// publish, emit, trigger
	publish: (eventName, param) => {
		if (events.hasOwnProperty(eventName)) {
			events[eventName].forEach((callback) => {
				callback(param);
			});
		}
	},

	// subscribe, on
	subscribe: (eventName, callback) => {
		events[eventName] = events[eventName] || [];

		// if (events.hasOwnProperty(eventName) == false) {
		//     events[eventName] = [];
		// }

		events[eventName].push(callback);
	},

	// unsubscribe, off
	unsubscribe: (eventName, callback) => {},
};
