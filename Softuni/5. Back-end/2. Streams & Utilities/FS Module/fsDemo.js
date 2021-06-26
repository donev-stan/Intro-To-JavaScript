const fs = require("fs");

// List files in directory
fs.readdir("../streams", (error, data) => {
	if (error) {
		return console.error(error);
	}

	// Write File
	fs.writeFile("./file-list.txt", data.join("\n"), (error) => {
		if (error) {
			return console.error(error);
		}
	});

	console.log(data);
});

// Create a directory
// fs.mkdir("./demoDir", (error) => {
// 	if (error) {
// 		return console.error(error);
// 	}
// });

// Rename a directiry
// fs.renameSync("./demoDir", "./demoDirRenamed");
