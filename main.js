const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  car.update();

  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 10;
    this.maxSpeed = 15;
    this.friction = 0.03;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    this.#move();
  }

  #move() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;

    // Boundary checks to keep the car within the canvas
    this.x = Math.max(
      this.width / 2,
      Math.min(canvas.width - this.width / 2, this.x)
    );
    this.y = Math.max(
      this.height / 2,
      Math.min(canvas.height - this.height / 2, this.y)
    );
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.fill();

    ctx.restore();
  }
}
class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          this.left = true;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          this.right = true;
          break;
        case "ArrowUp":
        case "w":
        case "W":
          this.forward = true;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          this.reverse = true;
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          this.left = false;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          this.right = false;
          break;
        case "ArrowUp":
        case "w":
        case "W":
          this.forward = false;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          this.reverse = false;
          break;
      }
    };
  }
}
