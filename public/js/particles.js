let bubble
let number_of_bubbles = 1000
let bubbles = []
class Bubble {
  constructor(initX, initY, initR) {
    this.x = random(width)
    this.y = random(height)
    this.r = random(10, 40)
  }

  move() {
    if (this.y < -1) {
      this.y = height
    } else {
      this.x = this.x + random(-5, 5)
      this.y = this.y + random(-7, 5)
    }
  }

  show() {
    // stroke(255)
    // strokeWeight(2)
    // noFill()
    noStroke()
    fill(255, 10)
    ellipse(this.x, this.y, this.r * 2)
  }
}

function setup() {
  createCanvas(600, 400)
  for (let i = 0; i < number_of_bubbles; i++) {
    bubbles[i] = new Bubble()
  }
}

function draw() {
  background(0)
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].show()
  }
}
