let firstNum = 0
let secondNum = 0
let counter = 0
document.getElementById('multiply').addEventListener('click', calculate)
// The function resets answer to zero if a multiplication has already been made on the web page. It also assigns the values of the textboxes to the variables firstNum and secondNum.
function calculate () {
  let answer = 0
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
  // This loop continues for until the counter becomes greater than firstNum. This allows the addition to mimic multiplication by adding secondNum to itself as much as firstNum's value.
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = answer
}
