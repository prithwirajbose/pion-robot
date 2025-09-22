// Select elements
const pion = document.querySelector('.pion-face');
const eyes = document.querySelectorAll('.eye');
let idleTimer;

// ?? Random movement
function randomMovement() {
  const x = (Math.random() - 0.5) * 10; // -5 to +5 px
  const y = (Math.random() - 0.5) * 10;
  pion.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
}

// ??? Blink animation
function blinkEyes() {
  eyes.forEach(eye => {
    const top = eye.querySelector('.eyelid-top');
    const bottom = eye.querySelector('.eyelid-bottom');

    top.style.height = '40%';
    bottom.style.height = '40%';

    setTimeout(() => {
      top.style.height = '0%';
      bottom.style.height = '0%';
    }, 200); // quick blink
  });
}

// ?? Random blink interval
function randomBlinkRate() {
  const interval = 3000 + Math.random() * 4000;
  setTimeout(() => {
    blinkEyes();
    randomBlinkRate(); // recursive call
  }, interval);
}

// ?? Critical squint on idle
function triggerIdleSquint() {
  eyes.forEach(eye => {
    const top = eye.querySelector('.eyelid-top');
    const bottom = eye.querySelector('.eyelid-bottom');
    top.style.height = '30%';
    bottom.style.height = '30%';
    eye.style.transform = 'scaleY(0.6)';
  });
}

// ?? Reset idle state
function resetIdle() {
  clearTimeout(idleTimer);
  eyes.forEach(eye => {
    const top = eye.querySelector('.eyelid-top');
    const bottom = eye.querySelector('.eyelid-bottom');
    top.style.height = '0%';
    bottom.style.height = '0%';
    eye.style.transform = 'scaleY(1)';
  });

  idleTimer = setTimeout(triggerIdleSquint, 5000); // 5s idle
}

// ?? Initialize behavior
function initPion() {
  randomBlinkRate();

  setInterval(() => {
    randomMovement();
  }, 2000 + Math.random() * 2000);

  ['mousemove', 'keydown', 'click', 'touchstart'].forEach(evt =>
    document.addEventListener(evt, resetIdle)
  );

  resetIdle(); // start idle timer
}

document.addEventListener('DOMContentLoaded', initPion);