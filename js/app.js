const startGame = document.getElementById('btn__reset');
const overlay = document.getElementById('overlay');
const homeh2 = document.querySelector('.title');

const game = new Game();

startGame.addEventListener('click', function() {
	game.startGame();
	startGame.classList.add('out-down');
	homeh2.classList.add('out-up');
	window.setTimeout(function() {
		overlay.classList.add('overlay-out');
	},500);
});

qwerty.addEventListener('click', function(e) {
	if (e.target.classList.contains('key')) {
		game.handleInteraction(e.target);
	}
});


