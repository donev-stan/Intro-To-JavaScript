function solve(){
    document.getElementsByTagName('button')[0].onclick = function exe (){
        let inputName = document.getElementsByTagName('input')[0];

        let firstLetterCode = (inputName.value).toLocaleUpperCase().charCodeAt(0);

        // accessing the catalogue
        let a = document.getElementsByTagName('li')[firstLetterCode - 65];

        // making the name start with Upper letter and the rest with Lower letters
        let nameToPush = (inputName.value[0]).toLocaleUpperCase() + (inputName.value).slice(1).toLocaleLowerCase();

        (a.textContent === '') ? a.textContent = nameToPush : a.textContent += ', ' + nameToPush;

        inputName.value = '';
    }
}

/*
function solve() {
  document.querySelector("button").addEventListener("click", onClick);
  const list = {};

  // съставяме списък
  //const items = document.querySelectorAll('ol > li');
  // ('ol > li') - намери всички елементи от тип 'li' които са директни деца на тип 'ol'
  // a better way:
  const items = document.querySelector("ol").querySelectorAll('li');
  items.forEach((el) => {
    // попълваме асоциативен масив по букви
    if (el.textContent.trim().length == 0) {
      return; // like continue
    }
    const letter = el.textContent[0].toLocaleUpperCase();
    list[letter] = el.textContent;
  });

  function onClick() {
    const input = document.querySelector("input");
    const value = input.value;
    const letter = value[0].toLocaleUpperCase();

    // добавяме към списък
    if (list.hasOwnProperty(letter) == false) {
      list[letter] = value;
    } else {
      list[letter] = list[letter] + ", " + value;
    }  

    // модифицираме DOM
    const index = letter.charCodeAt(0) - 65;
    items[index].textContent = list[letter];

    input.value = "";
  }
}
*/