function attachEvents() {
    const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    let loadBtn = document.querySelector("#btnLoad");
    loadBtn.addEventListener("click", load);
    
    let createBtn = document.querySelector("#btnCreate");
    createBtn.addEventListener('click', create);

    let ul = document.querySelector("#phonebook");

    
    function load(e) {

        //cleanup
        while (ul.firstChild) ul.removeChild(ul.lastChild);
        
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // { {}, {}, {}... }

                Object.entries(data).forEach(([id, { person, phone }]) => {
                    const deleteURL = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`;

                    let li = document.createElement("li");
                    li.textContent = `${person}: ${phone}`;

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Delete";
                    deleteBtn.addEventListener("click", () => {
                        fetch(deleteURL, {method: 'DELETE'});
                       
                    });
                    // remove li from view

                    li.appendChild(deleteBtn);
                    ul.appendChild(li);
                });
            });
    }

    function create(e){
        const personNameInput = document.querySelector('#person');
        const personPhoneInput = document.querySelector('#phone');
       
        const contact = {
            person: personNameInput.value,
            phone: personPhoneInput.value
        };

        const contactAsJSON = JSON.stringify(contact);

        fetch(url, {method: 'POST', body: contactAsJSON});
    }

    function deletE(e){
        
    }
}

attachEvents();
