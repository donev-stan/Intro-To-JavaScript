function solve() {
  let links = document.querySelectorAll('a');
  links.forEach(link => link.addEventListener('click', countVisited));

  function countVisited(e){
    let p = e.target.parentNode.nextElementSibling;
    let pText = p.innerText;

    // извличаме числото
    let timesVisited = [...pText].filter(el => !isNaN(el)).join('');
    // увеличаваме числото
    let timesVisitedIncremented = Number(timesVisited) + 1;
    // заменяме числото с новото увеличено число и записваме нов текст
    p.innerText = pText.replace(timesVisited, ` ${timesVisitedIncremented} `);
    
    console.log(p.innerText);
  }
}