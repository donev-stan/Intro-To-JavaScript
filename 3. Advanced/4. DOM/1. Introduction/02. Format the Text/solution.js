function solve() {
  let input = document.getElementById("input");
  let div = document.getElementById("exercise");

  let inputText = input.innerHTML
    .split(".")
    .filter((sentence) => sentence.length > 0);

  for (let i = 0; i < inputText.length; i+=3) {
    let p = document.createElement('p');

    if (inputText[i] != undefined) {
      p.innerHTML += inputText[i] + ".";
    }
    if (inputText[i+1] != undefined) {
      p.innerHTML += inputText[i+1] + ".";
    }
    if (inputText[i+2] != undefined) {
      p.innerHTML += inputText[i+2] + ".";
    }

    div.appendChild(p);
  }
}
