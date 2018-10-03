var score = 1

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)
  drawScore()
  drawButton()
}

function drawScore() {
  fill(0)
  noStroke()
  textAlign(CENTER)
  textSize(60)
  text('Score: ' + score, 200, 150)
}

function drawButton() {
  stroke(0)
  fill(255)
  rect(100, 250, 200, 70)

  fill(0)
  noStroke()
  textAlign(CENTER)
  textSize(30)
  text('click me', 200, 295)
}

function mousePressed() {
  var shouldIncreaseScore = isMouseInButton()
  if (shouldIncreaseScore) {
    score = score + 1
  }
}

function isMouseInButton() {
  var isInHorizontalRange = mousex < 100 && mouseX < 300
  var isInVerticalRange = mouseY < 250 && mouseY < 320

  isInHorizontalRange && isInVerticalRange
}
