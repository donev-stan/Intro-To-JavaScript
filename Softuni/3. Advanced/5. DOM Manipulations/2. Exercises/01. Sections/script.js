/*
function create(words) {
  
   const mainDiv = document.getElementById('content');
  
   words.forEach(section => {
  
      const div = document.createElement('div');
      mainDiv.append(div);
  
      const p = document.createElement('p');
      p.textContent = section;
      
      div.addEventListener('click', function (e) {
         e.target.append(p);
      });
  
   });
}
*/

// Back from the future (advanced functions) (closure)
function create(words) {
   const output = document.getElementById('content'); 

   words.forEach(word => output.appendChild(createArticle(word)));

   function createArticle(word){
      const p = e('p', word);
      p.style.display = 'none';

      const div = e('div', p);
      div.addEventListener('click', () => { p.style.display = '' });

      return div;
   }

   function e(type, content){
      const result = document.createElement(type);

      if (typeof content === 'string') {
         result.textContent = content;
      } else {
         result.appendChild(content);
      }

      return result;
   }
}
