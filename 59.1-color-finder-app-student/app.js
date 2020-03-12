/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
  let randButtonId = 1
  let currentPlayer = 1
  let p1Score = 0
  let p2Score = 0

  // Get UI Elements
  const p1ScoreDisplay = select('#score1')
  const p2ScoreDisplay = select('#score2')
  const button1 = select('#button1')
  const button2 = select('#button2')
  const button3 = select('#button3')
  const button4 = select('#button4')

  const color = 'RGB(320, 155, 0)'


  button1.style('background-color', color)
}
