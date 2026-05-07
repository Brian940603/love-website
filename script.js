const agree = document.getElementById("agree");
const disagree = document.getElementById("disagree");

agree.addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("congrats").classList.remove("hidden");
});

disagree.addEventListener("mouseover", () => {

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  disagree.style.left = `${x}px`;
  disagree.style.top = `${y}px`;
});