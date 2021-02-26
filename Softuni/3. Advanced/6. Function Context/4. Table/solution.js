function solve() {
   // добавяме click event listener на тялото на таблицата
   //-- ако избрания елемент свети -> гасим
   //-- иначе гасим всички останали

   const tbody = document.querySelector("tbody");
   tbody.addEventListener("click", parseTable);
   tbody.style.cursor = 'pointer';

   function parseTable(e) {
      const row = e.target.parentNode;
      
      if (row.nodeName === 'TR') {
         
         if (row.style.backgroundColor != '') {
            row.style.backgroundColor = '';
         } else {
            tbody.querySelectorAll('tr').forEach(tr => tr.style.backgroundColor = '');
            row.style.backgroundColor = '#185875';
         }
      }
   }
}
