const tilt = document.getElementById("tilt");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;
  tilt.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});