# Simple Car Simulation

A simple car simulation built with HTML, CSS, and JavaScript. The simulation features a car that can be controlled using keyboard inputs to move forward, reverse, and turn.


## Features

- Control the car using the arrow keys or WASD.
- Simulated physics for speed, acceleration, friction, and steering.
- Boundary checks to keep the car within the canvas.
- Smooth animations using `requestAnimationFrame`.

## Controls

- **Up Arrow / W**: Move forward
- **Down Arrow / S**: Move backward
- **Left Arrow / A**: Turn left
- **Right Arrow / D**: Turn right

## Project Structure

- **index.html**: Contains the HTML structure.
- **style.css**: Defines the canvas and body styling.
- **main.js**: Contains the logic for the car simulation and user controls.

## Getting Started

To run the project locally:

1. Clone this repository.
2. Open `index.html` in your preferred web browser.

No additional setup is required.

## How It Works

The car is represented as a rectangle in a 2D space. It has properties like speed, acceleration, friction, and an angle for direction. The `Car` class manages movement and controls using the arrow keys or WASD inputs.

The simulation is animated using the `animate()` function, which continuously updates and redraws the car on the canvas.

## Code Overview

- **Car Class**: Handles the car's position, speed, and movement based on keyboard inputs.
- **Controls Class**: Manages the keyboard listeners and updates the movement direction.
- **Canvas Drawing**: The car is drawn and rotated based on the current angle.

## Customization

You can customize the car's behavior by adjusting the parameters for speed, acceleration, friction, and turning speed in the `Car` class.

```js
this.acceleration = 10;
this.maxSpeed = 15;
this.friction = 0.03;
this.angle = 0.03; // Rotation speed
