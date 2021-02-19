function solve() {
   // send btn
   document.querySelector('#send').addEventListener('click', sendMsg);

   function sendMsg(e){
      
      // input msg area
      let input = document.querySelector('#chat_input');

      // actual msg
      const msg = input.value;

      // parent of the new div msg
      const chatDiv = document.querySelector('#chat_messages');

      // create div for msg
      const msgDiv = document.createElement('div');

      // assign div text with msg written
      msgDiv.textContent = msg;

      // set attributes
      msgDiv.className = "message my-message";

      // set parent and show it
      chatDiv.append(msgDiv);

      // clear 
      input.value = '';
   }
}