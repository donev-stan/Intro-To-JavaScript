function createArticle() {

	// getting elements from DOM 
	const input = document.getElementById('createTitle');
	const textArea = document.getElementById('createContent');
	const articles = document.getElementById('articles');

	// creating new elements
	const article = document.createElement('article');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');

	if (input.value !== '' && textArea.value !== '') {
		h3.innerHTML = input.value;
		p.innerHTML = textArea.value;
		// console.log(h3.innerHTML);
		// console.log(p.innerHTML);

		// append-ing the elements
		articles.appendChild(article);
		article.append(h3);
		article.append(p); 

		article.setAttribute("id","articleToDelete");
	}
}

function deleteArticle(){

	const article = document.getElementById('articleToDelete');

	if (article) {
		article.remove();
	}

}