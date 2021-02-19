let color;
let titleSize = 20;

[...document.querySelector('#colors').querySelectorAll('button')].forEach(btn => {
  btn.addEventListener('click', () => color = btn.innerText);
});

function growingWord() {
  const title = document.getElementsByTagName('h1')[0];

  title.style.fontSize = `${titleSize}px`;
  titleSize += 2;
  if (titleSize >= 50) {titleSize = 20};

  title.style.color = color;
}

/*
<div id="blueDiv">Blue</div>
<div id="greenDiv">Green</div>
<div id="redDiv">Red</div>
*/
// const blue = document.querySelector('#blueDiv');
// const green = document.querySelector('#greenDiv');
// const red = document.querySelector('#redDiv');

// blue.addEventListener('click', () => color = blue.innerText);
// green.addEventListener('click', () => color = green.innerText);
// red.addEventListener('click', () => color = red.innerText);