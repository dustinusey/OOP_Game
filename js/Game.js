class Game {
	constructor(){
		this.missed = 4;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	/**
	 * Creates phrases for use in game
	 */
	createPhrases() {
		const phrases = [
		{ phrase: 'Git Good'},
		{ phrase: 'One Git Wonder'},
		{ phrase: 'Lets Branch Off'},
		{ phrase: 'Dont Blame Me'},
		{ phrase: 'Push Dont Pull'}
		];
			return phrases;
	}

	createHints() {
		const hints = [
			{ hint: 'To be better at something, you need to...'},
			{ hint: 'One and done!'},
			{ hint: 'To separate and move in a different direction.'},
			{ hint: 'Not my fault!'},
			{ hint: 'To enter my store, ... the door.'},
		];
	}

	getRandomPhrase() {
		let randomIndex = Math.floor(Math.random() * this.phrases.length);
		let randomPhrase = new Phrase(this.phrases[randomIndex]);
		return randomPhrase;
	};

	startGame() {
		this.gameReset();
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	handleInteraction(choice) {
		if (this.activePhrase.checkLetter(choice.textContent) ) {
			choice.classList.add('chosen');
			choice.classList.add('success');
			this.activePhrase.showMatchedLetter(choice.textContent);
			if (this.checkForWin()) this.gameOver(true);
		} else {
			choice.classList.add('chosen');
			choice.classList.add('error');
			this.removeLife();
		}
	}

	checkForWin() {
		let phraseLength = document.querySelectorAll('.letter').length;
		let correctLength = document.querySelectorAll('.show').length;

		if ( correctLength !== phraseLength) {
			return false;
		} else {
			return true;
		}
	}

	removeLife() {
		let score = this.missed;
		let heartImg = document.querySelectorAll('.tries img');
		if (this.missed == 0) {
			heartImg[score].src = 'images/lostHeart.png';
			this.gameOver(false);
			this.activePhrase = null;
			
		} else if
			(this.missed <= 4) {
			heartImg[score].src = 'images/lostHeart.png';
			this.missed--;
			console.log(this.missed);
		}
	}
	gameOver(win) {
		const overlay = document.getElementById('overlay');
		const titleText = document.querySelector('.title');
		const endMessage = document.querySelector('#game-over-message');
		const startGame = document.getElementById('btn__reset');
		if (win) {
				titleText.classList.remove('out-up');
				titleText.innerHTML = `You've won!`;
				endMessage.innerHTML = `Play Again?`;
				overlay.classList.add('win');
				overlay.classList.remove('overlay-out');
				startGame.classList.remove('out-down');
		} else {
			   titleText.classList.remove('out-up');
				titleText.innerHTML = `You've lost!`;
				endMessage.innerHTML = `Play Again?`;
				overlay.classList.add('lose');
				overlay.classList.remove('overlay-out');
				startGame.classList.remove('out-down');	
		}
		this.activePhrase = null;
	}

	gameReset() {
		this.missed = 4;
		const buttons = document.querySelectorAll('#qwerty button');
		const ul = document.querySelector('#phrase ul');
		const heart = document.querySelectorAll('.tries img');
		const overlay = document.getElementById('overlay');

		overlay.classList = 'start';

		for (let i = 0; i < buttons.length; i ++ ) {
			buttons[i].classList = ('key');
		}
		for (let j = 0; j < heart.length; j ++ ) {
			heart[j].src = 'images/liveHeart.png';
		}
		ul.innerHTML = '';
	}



} /* /Game */