const startGame = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const homeh2 = document.querySelector('.title');


startGame.addEventListener('click', function() {
	startGame.classList.add('out-down');
	homeh2.classList.add('out-up');
	window.setTimeout(function() {
		overlay.classList.add('overlay-out');
	},500);
});




// Game



const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


const keys = document.querySelectorAll('.key');
const keyboard = document.getElementById('qwerty');
const phraseLetters = document.querySelectorAll('.letter');

keyboard.addEventListener("click", function(e) {
  phraseLetters.forEach((element, index) => {
	  let btnContent = e.target.textContent;
	  let btn = e.target;
	  if (element.textContent === btnContent && e.target.classList.contains('key')) {
		  let clicked = e.target;
		  element.classList.add('show');
		  clicked.classList.add('chosen');
		  clicked.classList.add('success');
	  } else 
	  if (element.textContent !== btnContent && e.target.classList.contains('key')) {
		  let clicked = e.target;
		  clicked.classList.add('chosen');
		  clicked.classList.add('error');
	  }
  });
});