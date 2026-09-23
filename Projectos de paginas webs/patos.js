const pond = document.querySelector("#pond");
const duckCount = 24;
const duckSound = new Audio("quack_5.mp3");
duckSound.preload = "auto";
let zIndex = 3;
let heldDuck;
let pointerOffset = { x: 0, y: 0 };
let lastMoveSound = 0;
const ducks = [];
let duckClicks = 0;
const clickCounter = document.querySelector("#duck-clicks");

function quack() {
  const sound = duckSound.cloneNode();
  sound.volume = .8;
  sound.play().catch(() => {});
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDuck(index) {
  const duck = document.createElement("button");
  duck.className = "duck";
  duck.type = "button";
  duck.innerHTML = '<span class="duck-body"><span class="duck-eye"></span><span class="duck-beak"></span><span class="duck-wing"></span></span>';
  duck.setAttribute("aria-label", `Pato ${index + 1}`);
  duck.style.left = `${random(20, Math.max(20, pond.clientWidth - 100))}px`;
  duck.style.top = `${random(20, Math.max(20, pond.clientHeight - 100))}px`;
  duck.style.transform = `rotate(${random(-12, 12)}deg)`;
  duck.style.setProperty("--duck-scale", `${random(88, 112) / 100}`);
  duck.motion = { x: Number.parseFloat(duck.style.left), y: Number.parseFloat(duck.style.top), vx: (Math.random() - .5) * .7, vy: (Math.random() - .5) * .7 };
  duck.addEventListener("pointerdown", startDrag);
  duck.addEventListener("click", registerDuckClick);
  pond.append(duck);
  ducks.push(duck);
}

function registerDuckClick() {
  duckClicks += 1;
  clickCounter.textContent = String(duckClicks);
  if (duckClicks === 7) {
    ducks.slice(0, Math.ceil(ducks.length / 3)).forEach((duck) => duck.classList.add("is-pink"));
  }
  if (duckClicks >= 12) {
    ducks.forEach((duck, index) => {
      duck.classList.toggle("is-pink", index % 2 === 0);
      duck.classList.toggle("is-purple", index % 2 !== 0);
    });
  }
}

function startDrag(event) {
  heldDuck = event.currentTarget;
  heldDuck.classList.add("is-held");
  heldDuck.style.zIndex = String(zIndex++);
  const duckRect = heldDuck.getBoundingClientRect();
  pointerOffset = { x: event.clientX - duckRect.left, y: event.clientY - duckRect.top };
  heldDuck.setPointerCapture(event.pointerId);
  quack(1.1);
  heldDuck.addEventListener("pointermove", dragDuck);
  heldDuck.addEventListener("pointerup", stopDrag, { once: true });
  heldDuck.addEventListener("pointercancel", stopDrag, { once: true });
}

function dragDuck(event) {
  if (!heldDuck) return;
  const pondRect = pond.getBoundingClientRect();
  const left = Math.max(0, Math.min(pondRect.width - heldDuck.offsetWidth, event.clientX - pondRect.left - pointerOffset.x));
  const top = Math.max(0, Math.min(pondRect.height - heldDuck.offsetHeight, event.clientY - pondRect.top - pointerOffset.y));
  heldDuck.motion.x = left;
  heldDuck.motion.y = top;
  heldDuck.style.left = `${left}px`;
  heldDuck.style.top = `${top}px`;
  const now = performance.now();
  if (now - lastMoveSound > 120) {
    quack(.88 + Math.random() * .2);
    lastMoveSound = now;
  }
}

function stopDrag() {
  if (!heldDuck) return;
  heldDuck.classList.remove("is-held");
  heldDuck.motion.vx = (Math.random() - .5) * .7;
  heldDuck.motion.vy = (Math.random() - .5) * .7;
  heldDuck.removeEventListener("pointermove", dragDuck);
  heldDuck = null;
}

for (let index = 0; index < duckCount; index += 1) createDuck(index);

function moveDucks() {
  const pondWidth = pond.clientWidth;
  const pondHeight = pond.clientHeight;
  ducks.forEach((duck) => {
    if (duck === heldDuck) return;
    const motion = duck.motion;
    motion.x += motion.vx;
    motion.y += motion.vy;
    if (motion.x <= 0 || motion.x >= pondWidth - duck.offsetWidth) {
      motion.vx *= -1;
      motion.x = Math.max(0, Math.min(pondWidth - duck.offsetWidth, motion.x));
    }
    if (motion.y <= 0 || motion.y >= pondHeight - duck.offsetHeight) {
      motion.vy *= -1;
      motion.y = Math.max(0, Math.min(pondHeight - duck.offsetHeight, motion.y));
    }
    duck.style.left = `${motion.x}px`;
    duck.style.top = `${motion.y}px`;
  });
  requestAnimationFrame(moveDucks);
}

requestAnimationFrame(moveDucks);
