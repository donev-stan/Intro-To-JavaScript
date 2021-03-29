function loadRepos() {
	const userElement = document.getElementById('username'); // input
	const reposElement = document.getElementById('repos'); // ul
	
	const url = `https://api.agify.io?name=${userElement.value}`;
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			reposElement.innerHTML = `<li> ${data.age} </li>`;

			if (data.age == null) {
				
				reposElement.innerHTML = `<li> ${userElement.value} not found </li>`;
			}
		})
}