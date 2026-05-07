const disagree = document.getElementById("disagree");

disagree.style.position = "fixed";

document.addEventListener("mousemove", (e) => {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const rect = disagree.getBoundingClientRect();

  const btnX = rect.left;
  const btnY = rect.top;

  const distanceX = mouseX - btnX;
  const distanceY = mouseY - btnY;

  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  // 滑鼠靠近時開始逃跑
  if (distance < 150) {

    const moveX = -distanceX / distance * 20;
    const moveY = -distanceY / distance * 20;

    let newX = btnX + moveX;
    let newY = btnY + moveY;

    // 防止跑出畫面
    newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

    disagree.style.left = `${newX}px`;
    disagree.style.top = `${newY}px`;
  }

});