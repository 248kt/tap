const animation = document.addEventListener("DOMContentLoaded", function() {
  const tapBtn = document.getElementById("tap-btn");

  function randomRotation() {
      const min = -10;
      const max = 10;
      const randomDegree = Math.random() * (max - min) + min;
      return `${randomDegree}deg`;
  }

  tapBtn.addEventListener("mousedown", () => {
      const randomDegree = randomRotation();
      tapBtn.style.setProperty('--random-rotation', randomDegree);
  });
});