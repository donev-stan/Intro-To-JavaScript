function loadRepos() {
	const codeElement = document.getElementById('statusCode'); // input
	const imgElement = document.querySelector('img');
	imgElement.src = `https://http.cat/${codeElement.value}`;
	
	const url = `https://http.cat/${codeElement.value}`;
}