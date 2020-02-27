class Phrase {
	constructor(phrase){
		this.phrase = phrase.phrase.toLowerCase();
	}

	/**
	 * Display phrase on game board
	 */
	addPhraseToDisplay() {
		let phraseSplit = this.phrase.split("");
		let ul = document.querySelector('#phrase ul');
		for (let i = 0; i < this.phrase.length; i ++ ) {
			if (phraseSplit[i] === " ") {
				console.log(`${phraseSplit[i]}`)
				ul.innerHTML += `<li class="space">${phraseSplit[i]}</li>`
			} else {
				ul.innerHTML += `<li class="letter ${phraseSplit[i]}">${phraseSplit[i]}</li>`
			}
		}
	}

	checkLetter(letter) {
		if (this.phrase.split("").includes(letter)) {
			return true;
		} else {
			return false;
		}
	}

	showMatchedLetter(matchedLetter) {
		if (this.checkLetter(matchedLetter)) {
			let letters = document.querySelectorAll(`.${matchedLetter}`);
			letters.forEach((match) => {
				match.classList.add('show');
			});
		}
	}


} /* Phrase */