function solve() {
   
   let p1img;
   let p2img;

   let p1CardPower;
   let p2CardPower;

   let nextMove = false;
   
   const resultDiv = document.querySelector('#result');
   const leftSpan = resultDiv.firstChild;
   const rightSpan = resultDiv.lastChild;

   document.querySelector('#player1Div').addEventListener('click', player1Click);
   document.querySelector('#player2Div').addEventListener('click', player2Click);
   const historyDiv = document.querySelector('#history');

   function player1Click(e){
      if (e.target.tagName === 'IMG') {
         
         p1img = e.target;
         e.target.style.pointerEvents = 'none'; // disables clicking it
         e.target.src = "./images/whiteCard.jpg";

         p1CardPower = e.target.name; 
         leftSpan.textContent = p1CardPower;

         nextMove = true;
      }
   }

   function player2Click(e){

      if (nextMove) {
         
         if (e.target.tagName === 'IMG') {
            
            p2img = e.target;
            e.target.style.pointerEvents = 'none';
            e.target.src = "./images/whiteCard.jpg";
            
            p2CardPower = e.target.name;
            rightSpan.textContent = p2CardPower;
            
            if (leftSpan.textContent.trim() !== '' && rightSpan.textContent.trim() !== '') {
               const p1Win = Number(leftSpan.textContent) > Number(rightSpan.textContent) ? true : false;
               if (p1Win) { 
                  p1img.style.border = "2px solid green";
                  p2img.style.border = "2px solid red";
               } else {
                  p2img.style.border = "2px solid green";
                  p1img.style.border = "2px solid red";
               }
            }

            historyDiv.textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;
            
            setTimeout(() => {
               leftSpan.textContent = '';
               rightSpan.textContent = '';
            }, 1000);
       
            nextMove = false;
         }
      }
   }
}