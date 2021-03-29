function loadRepos() {
	const userElement = document.getElementById('username'); // input
	const reposElement = document.getElementById('repos'); // ul
	
	const url = `https://api.github.com/users/${userElement.value}/repos`;
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			reposElement.innerHTML = data.map(x => `<li><a href="${x.html_url}" target="_blank"> ${x.name} </a></li>`).join('');
		})
}