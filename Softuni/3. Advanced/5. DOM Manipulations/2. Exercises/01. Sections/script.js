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