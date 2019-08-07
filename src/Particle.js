function random(x) {
  return Math.random() * x;
}

// Random binary 
function binRandom(x) {
  return Math.random() < x;
}

let colors = ["rgba(60,193,87,", "rgba(42,167,255,", "rgba(252,188,15,", "rgba(248,95,54,"];

export default class Particle {
  constructor() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.position = {
      x: random(w),
      y: random(h)
    };
    this.velocity = {
      x: binRandom(0.5) ? random(.5) : random(-.5),
      y: binRandom(0.5) ? random(.5) : random(-.5)
    };
    this.size = random(1) + 2.8;
    this.opacity = random(1) + .3;
    this.color = colors[Math.floor(Math.random() * 4)] + this.opacity + ")";
  }
}