const eyeMovement = (selector) => {
  const eye = document.querySelector(selector);
  const pupil = eye.querySelector(".pupil");
  const eyeSpace = eye.getBoundingClientRect();

  const eyeSpinning = (mouseX, mouseY) => {
    const radian = Math.atan2(
      mouseY - (eyeSpace.y + eyeSpace.height * 0.5), // y길이
      mouseX - (eyeSpace.x + eyeSpace.width * 0.5) // x길이
    );
    pupil.style.transform = `rotate(${(180 * radian) / Math.PI - 90}deg)`;
  };

  return { eyeSpinning: eyeSpinning };
};

const leftEye = eyeMovement(".left-eye");
const rightEye = eyeMovement(".right-eye");

window.addEventListener("mousemove", (e) => {
  leftEye.eyeSpinning(e.pageX, e.pageY); // 현재 마우스 좌표 가져옴
  rightEye.eyeSpinning(e.pageX, e.pageY);
});
