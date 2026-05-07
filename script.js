const agree = document.getElementById("agree");
const disagree = document.getElementById("disagree");

agree.addEventListener("click", () => {
  alert("太好了 ❤️");
});

disagree.addEventListener("mouseenter", () => {

  const btnWidth = disagree.offsetWidth;
  const btnHeight = disagree.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  disagree.style.position = "fixed";
  disagree.style.left = `${x}px`;
  disagree.style.top = `${y}px`;

});