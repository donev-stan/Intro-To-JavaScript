/* // Adding elements

    //-- we should first select the element(parent) were going to be adding to
    const body = document.body;
    //-- to add/append element to the body
    body.append("Hello DOM!"); // works with elements and strings 
    // we could also append multiple elements: body.append("Hello DOM!", "Adventure begins..");
    //body.appendChild(); // works with HTML elements ONLY
*/

/* // Creating elements
    const body = document.body;

    const div = document.createElement('div'); // still not showing it to the page (only in the memory)
    body.append(div);
*/

/* // Modifying element TEXT
    const body = document.body;

    // using .innerText
    const firstDiv = document.createElement("div"); // still not showing it to the page (only in the memory)
    firstDiv.innerText = 'Hello World!';
    
    body.append(firstDiv); // body.appendChild(div) would do the same

    // using .textContent
    const secondDiv = document.createElement("div"); // still not showing it to the page (only in the memory)
    secondDiv.textContent = 'Hello World in another div.';

    body.append(secondDiv);
*/

/* // Modifying element TEXT (2) -- added span tags and the second one is with style "display: none"
    const div = document.querySelector('div');

    console.log(div.textContent); // (textContent) will print everything hidden or not even with spacing (exact text content):
    //    Hello
    //    Bye
    console.log(div.innerText); // (innerText) will only print whats visible on the page:
    //    Hello
*/

/* // Modifying element HTML
    const body = document.body;
    const div = document.createElement('div');
    body.append(div);

    div.textContent = "<strong> Hello World </strong>";
    // prints the text exactly as it is: <strong> Hello World </strong>

    div.innerHTML = "<strong> Hello World </strong>"; // renders the html
    // prints "Hello World" bolded


    // --- innerHTML is not safe (if we allow users to put user generated content into innerHTML they could write malicious code)
    // to esc that:
    const strong = document.createElement('strong');
    strong.innerHTML = 'Safer Hello World';
    div.append(strong);
*/

/* // Removing elements
    const body = document.body;
    const div = document.querySelector('div');
    const spanHi = document.querySelector('#hi');
    const spanBye = document.querySelector("#bye");

    spanBye.remove(); // deletes it from the HTML and therefore the page
    div.append(spanBye); // We could add it again because it lives still in the memory

    // removing from the parent
    div.removeChild(spanBye);
    div.append(spanBye); 
*/

/* // Modifying element Attributes
    const body = document.body;
    const div = document.querySelector('div');
    const spanHi = document.querySelector('#hi');
    const spanBye = document.querySelector("#bye");

    console.log(spanHi.getAttribute("title")); // prints hello
    console.log(spanHi.getAttribute("id")); // prints hi
    console.log(spanHi.id); // does the same
    console.log(spanHi.title); // does th e same

    spanHi.removeAttribute("title"); // removes the title
    spanHi.removeAttribute("id"); // removes the id
*/

/* // Modifying data Attributes
    const body = document.body;
    const div = document.querySelector('div');
    const spanHi = document.querySelector('#hi');
    const spanBye = document.querySelector("#bye");

    console.log(spanHi.dataset.test); // prints out "this is a test"

    // set 
    spanBye.dataset.newDataTest = "test for span 2"; 
    //-- adds attribute: data-new-data-test: "test for span 2" to the second span
*/

/* // Modifying element Class
    const body = document.body;
    const div = document.querySelector('div');
    const spanHi = document.querySelector('#hi');
    const spanBye = document.querySelector("#bye");

    spanHi.classList.add("new-class"); // adds a new class
    spanHi.classList.remove("hi1"); // removes the hi1 but hi2 is untouched

    spanHi.classList.toggle("hi3"); // add if it doesnt exist OR removes if it does exist
    spanHi.classList.toggle("hi3", true); // we can add or remove based on a boolean 
*/

/* // Modifying element style
    const body = document.body;
    const div = document.querySelector('div');
    const spanHi = document.querySelector('#hi');
    const spanBye = document.querySelector("#bye");

    spanHi.style.color = "red"; // makes text color turn red
    spanHi.style.backgroundColor = "green"; // makes the background green
*/