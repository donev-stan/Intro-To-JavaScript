function loadCommits() {
    const username = document.querySelector('#username').value;
    const repo = document.querySelector('#repo').value;
    
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let commitsElement = document.querySelector('#commits');
    
    fetch(url)
        .then(response => response.json())
        .then(commitsData => {
            console.log(commitsData); // [ 0: {commit: {author: 'name',...}, message: 'text']
            console.log(`First author name: ${commitsData[0].commit.author.name}`); // Svetlin nakov
            console.log(`First author comment: ${commitsData[0].commit.message}`); // Compressed the package icon

            let commits = commitsData.map(c => `<li>${c.commit.author.name}: ${c.commit.message}</li>`).join('');
            commitsElement.innerHTML = commits;
        })
        .catch(error => {
            commitsElement.innerHTML = `<li> ${error.status} (${error})`;
        });
}