function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   const httpRequest = new XMLHttpRequest(); // This obje allows us to make request against an API
   const resElement = document.getElementById('res');

   httpRequest.addEventListener('loadend', function() { // on success
      let repos = JSON.parse(this.responseText);

      console.log(repos);
      resElement.innerHTML = repos.map(x => `<p><a href="${x.html_url}" target="_blank"> ${x.name} </a></p>`).join('');
   });

   httpRequest.open('GET', url); // Specifies the path of the request in the .open func
   httpRequest.send();
} 