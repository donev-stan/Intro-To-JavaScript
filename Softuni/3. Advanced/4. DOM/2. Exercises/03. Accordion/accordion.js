function toggle() {
  const div = document.querySelector("#extra");
  const btn = document.querySelectorAll(".button")[0];
  //const [btn] = Array.from(document.querySelectorAll(".button")); // this returns an array LIKE list. We cast it into an array and then by deconstructing we tak the '0' element
  //const [btn] = [...document.querySelectorAll(".button")]; -- the same

  console.log(btn.textContent);
  if (div.style.display === "block") {
    btn.textContent = "MORE";
    div.style.display = "none";
  } else {
    btn.textContent = "LESS";
    div.style.display = "block";
  }
}
