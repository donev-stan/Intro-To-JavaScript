function solve() {
  
  let points = 0;
  let sectionIndex = 0;
  const section = document.querySelectorAll('section');

  [...document.querySelectorAll('.answer-text')].forEach(btn => {
    btn.addEventListener('click', answerAction);
  });

  function answerAction(e){
    const answer = e.target.innerText;
    switch (answer) {
      case 'onclick':
      case 'JSON.stringify()':
      case 'A programming API for HTML and XML documents':
        points++;
        break;
    }

    section[sectionIndex].className = 'hidden';
    sectionIndex++;
    if (section[sectionIndex]) { section[sectionIndex].className = 'block'; }
    else { showResult(); }
  }

  function showResult(){

    const ul = document.querySelector('#results');
    const h1 = ul.querySelector('h1');

    ul.style.display = "block";

    if (points < 3) { h1.innerText = `You have ${points} right answers!`; }
    else { h1.innerText = `You are recognized as top JavaScript fan!`; }
  }
}
