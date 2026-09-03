const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const header = document.querySelector(".header");
const pres_container = document.querySelector(".pres_container");


// Ajustar dimensiones
canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.height = header.offsetHeight + pres_container.offsetHeight + 300;

// Ajustar el canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;
    canvas.height = header.offsetHeight + pres_container.offsetHeight + 300;
  initParticles();
});

// Configuración de partículas
const particlesArray = [];
const numberOfParticles = 100;
const maxDistance = 150;

class Particle {
  constructor(x, y, dx, dy, size) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 183, 255, 0.8)';
    ctx.fill();
  }
  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

function initParticles() {
  particlesArray.length = 0;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * (canvas.width - size * 2) + size;
    const y = Math.random() * (canvas.height - size * 2) + size;
    const dx = (Math.random() - 0.5) * 2;
    const dy = (Math.random() - 0.5) * 2;
    particlesArray.push(new Particle(x, y, dx, dy, size));
  }
}

function connectParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.strokeStyle = 'rgba(0, 183, 255, '+ (1 - distance / maxDistance) + ')';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => particle.update());
  connectParticles();
  requestAnimationFrame(animate);
}

initParticles();
animate();