let bubble
let number_of_bubbles = 50
let bubbles = []
class Bubble {
  constructor(initX, initY, mouse) {
    this.x = initX
    this.y = initY
    this.r = random(10, 40)
    this.mouse = mouse
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
    // noStroke()
    // fill(255, 10)
    noStroke()
    fill(random(255), random(255), random(255), random(255))
    ellipse(this.x, this.y, this.r * 2)
  }
}

function setup() {
  var canvas = createCanvas(600, 400)
  canvas.parent("sketch-holder")
  for (let i = 0; i < number_of_bubbles; i++) {
    bubbles[i] = new Bubble(random(width), random(height), false)
  }
}

function draw() {
  background(0)
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].show()
  }
}

function mouseDragged() {
  let bubble = new Bubble(mouseX, mouseY, true)
  bubbles.push(bubble)
}
