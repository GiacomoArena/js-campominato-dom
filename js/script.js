/* Global Variables */
const mainWrapper = document.querySelector('.main-wrapper')
const container = document.querySelector('.container')
const startButton = document.querySelector('button')
const reset = document.getElementById('reset')
let score = document.getElementById('score')
const levels = [100, 81, 49]
let spanbombs ;
let generatedNumbers = [];
let square = [];
let squareBomb = [];
let field 
let points = 0


container.classList.add('hide')
reset.classList.add('hide')
score.classList.add('hide')
//click start button
startButton.addEventListener('click', function(){
  
  if(container.classList.contains('hide')) {
    container.classList.remove('hide')
    reset.classList.remove('hide')
    score.classList.remove('hide')
    startButton.classList.add('none')
  }
  field = createField()
})

reset.addEventListener('click', function(){
  location.reload()
})



/*                FUNCTION                     */

function createSquare(index) {

  const divSquare = document.createElement('div')

  divSquare.classList.add('square');
  divSquare.classList.add('ID' + index)
  return divSquare;
}
//
function uniqueRandomNum(generatedNumbers, max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (generatedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  generatedNumbers.push(randomNumber);

  return randomNumber;
}
//
function createField() {
  
for (let i = 0; i < levels[0]; i++) {
  square[i] = createSquare(i);
  let randomNum = uniqueRandomNum(generatedNumbers, 100, 1);
  let spanNumber = document.createElement('span');
  spanNumber.append(randomNum)
  
  let squareId = randomNum;

  square[i].addEventListener('click', function clicked(){
    points++
    score.innerHTML = `Your Score Is: ${points} Points`;
    console.log("i tuoi punti : ", points);
    square[i].classList.add('clicked');
    console.info("hai clicacto il N° " + squareId);
    
    square[i].append(spanNumber);
  })
  container.appendChild(square[i]);
}

generatedNumbers = []


for (let i = 0; i < 16;  i++) {
  let randomNum = uniqueRandomNum(generatedNumbers, 100, 1);
  squareBomb[i] = createSquare(randomNum);
  
  squareBomb[i].addEventListener('click', function(){
    score.innerHTML = `Loser With : ${points} Points`;
    squareBomb[i].innerHTML = '<i class="fa-solid fa-bomb"></i>';
    squareBomb[i].classList.add('bomb');
    container.classList.add('disable')
    alert("YOU LOSER!");
  })

  container.replaceChild(squareBomb[i], square[randomNum]) 
}
}
