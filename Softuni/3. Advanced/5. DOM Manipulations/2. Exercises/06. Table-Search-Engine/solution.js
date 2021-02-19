function solve() {
   // закачаме eventListener
   // четем входа
   // обхождаме редовете и премахваме class select
   // обхождаме клетките и търсим съвпадения 
   //--- добавяме class select на родителя (реда)
   // зачистваме полето

   document.querySelector('#searchBtn').addEventListener('click', onSearch);

   function onSearch(e){

      const query = document.querySelector('#searchField').value.trim().toLocaleLowerCase();
      
      if (query.trim().length > 0) {
         const tbody = document.querySelector('tbody');

         [...tbody.querySelectorAll('tr')].forEach( r => {
            r.classList.remove('select');
         });

         [...tbody.querySelectorAll('td')].forEach(d => {
               if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
                  d.parentNode.classList.add('select');
               }
         })
      }
   }
}