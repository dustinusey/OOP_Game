class Game {
	constructor(){
		this.missed = 0;
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
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	handleInteraction(choice) {
		if (this.activePhrase.checkLetter(choice) ) {
			choice.classList.add('chosen');
			choice.classList.add('success');
			this.activePhrase.showMatchedLetter(choice.innerHTML);
			if (this.checkForWin() ) this.gameOver(true);
		} else {
			choice.classList.add('chosen');
			choice.classList.add('error');
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
		if (this.missed < 4) {
			let score = this.missed;
			let heartImg = document.querySelectorAll('.tries');
			heartImg[score].classList.add('lostHeart');
			this.missed ++;
		} else {
			this.gameOver(false);
			this.activePhrase = null;
		}
	}
	gameOver(win) {
		let titleText = document.querySelector('.title');
		let endMessage = document.querySelector('#game-over-message');
		if (win) {
			setTimeout(function() {
				titleText.innerHTML = `You've won!`;
				endMessage.innerHTML = `Play Again?`;
				this.overlay.classlist.add('win');
			}, 1400);
		} else {
			window.setTimeout(function() {
				titleText.innerHTML = `You've lost!`;
				endMessage.innerHTML = `Play Again?`;
				this.overlay.classList.add('lose');
			}, 1400);
		}
		this.activePhrase = null;
	}

} /* /Game */