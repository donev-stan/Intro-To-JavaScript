// Promises

const fs = require("fs");

function readFileAsync(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (error, data) => {
			if (error) {
				return reject(error);
			}

			resolve(data);
		});
	});
}

module.exports = {
	readFileAsync,
};
