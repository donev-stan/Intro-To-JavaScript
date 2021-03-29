function attachEvents() {
    const url = `https://rest-messanger.firebaseio.com/messanger.json`;

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);
    
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    const textArea = document.getElementById('messages');
    
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');

    function refresh(e){
        //cleanup
        textArea.textContent = '';

        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                Object.entries(data).forEach(([keyID, {author, content}]) => {
                    textArea.textContent += `${author}: ${content} \n`;
                });
            });
    }

    function submit(e){

        const message = {
            author: authorInput.value,
            content: contentInput.value
        }

        const messageAsJSON = JSON.stringify(message);

        fetch(url, {method: 'POST', body: messageAsJSON})

        authorInput.value = '';
        contentInput.value = '';

        refresh();
    }
}

attachEvents();