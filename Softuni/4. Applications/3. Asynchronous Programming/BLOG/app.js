function attachEvents() {
    const loadPostsBtn = document.querySelector('#btnLoadPosts');
    loadPostsBtn.addEventListener('click', load);

    const posts = document.querySelector('#posts');
    posts.addEventListener('change', postChange);

    const baseURL = `https://blog-apps-c12bf.firebaseio.com`;

    const postTitleH1 = document.querySelector('#post-title');
    const postBodyUl = document.querySelector('#post-body');
    const postCommentsUl = document.querySelector('#post-comments');

    
    function load(e){
        fetch(`${baseURL}/posts.json`)
        .then(response => response.json())
        .then(data => {
            const options = Object.entries(data).map(([keyID, {body, id, title}]) => `<option value="${keyID} ${id}">${title}</option>`);
            posts.innerHTML = options;
        })
    }
    
    function postChange(e){
        while (postBodyUl.firstChild) postBodyUl.removeChild(postBodyUl.lastChild);
        while (postCommentsUl.firstChild) postCommentsUl.removeChild(postCommentsUl.lastChild);

        const [keyID, postID] = e.currentTarget.value.split(' ');
        const urlPostDetails = `https://blog-apps-c12bf.firebaseio.com/posts/${keyID}.json`;

        fetch(urlPostDetails)
            .then(response => response.json())
            .then(data => {
                postTitleH1.innerText = data.title;
                
                const li = document.createElement('li');
                li.textContent = data.body;
                postBodyUl.appendChild(li);
            })

        const urlComments = `https://blog-apps-c12bf.firebaseio.com/comments.json`;
        fetch(urlComments)
            .then(response => response.json())
            .then(data => {
                const comments = Object
                    .entries(data)
                    .filter(([keyID, {id, postId, text}]) => postId == postID)
                    .map(([keyID, {text}]) => `<li> ${text} </li>`)
                   
                postCommentsUl.innerHTML = [...comments].join('');
            });
    }
}

attachEvents();