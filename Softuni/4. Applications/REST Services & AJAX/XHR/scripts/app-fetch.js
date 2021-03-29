function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   const resElement = document.getElementById('res'); // div
   
   fetch(url)
      .then(response => response.json())
      .then(data => {
         data.forEach(repo => {
            const liElement = document.createElement('li');
            liElement.innerHTML = `<a href="${repo.html_url}" target="_blank"> ${repo.name} </a>`;
            resElement.appendChild(liElement);
         });
      })
}