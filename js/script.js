
const mainWrapper = document.querySelector('.main-wrapper')
const container = document.querySelector('.container')
const startButton = document.querySelector('button')
let generatedNumbers = [];
container.classList.add('hide')

startButton.addEventListener('click', function(){
  
  if(container.classList.contains('hide')) {
    container.classList.remove('hide')
    startButton.classList.add('none')
  }
})


for (let i = 0; i < 100; i++) {
  const square = createSquare();
  let randomNum = uinqueRandomNum(generatedNumbers, 100, 1);
  let spanNumber = document.createElement('span');
  spanNumber.append(randomNum)
  container.appendChild(square);
  let squareId = randomNum;

  square.addEventListener('click', function(){
    this.classList.toggle('clicked');
    console.info("hai clicacto il N° " + squareId);
    
    square.append(spanNumber);
    if(!square.classList.contains('clicked')){
      square.removeChild(spanNumber)
    }
    
  })
}




/*                FUNCTION                     */

function createSquare() {

  const divSquare = document.createElement('div')

  divSquare.classList.add('square');

  return divSquare;
}

function uinqueRandomNum(generatedNumbers, max, min) {
  let randomNumber = Math.floor(Math.random() * (max - min +1)+min);

  while (generatedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min +1)+min);
  }
  generatedNumbers.push(randomNumber);

  return randomNumber;
}


