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

	handleInteraction() {

	}

	checkForWin() {

	}

	removeLife() {

	}
	gameOver() {
	}

} /* /Game */