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
				ul.innerHTML += `<li class="space">${phraseSplit[i]}</li>`
			} else {
				ul.innerHTML += `<li class="letter">${phraseSplit[i]}</li>`
			}
		}
	}

	checkLetter() {
		this.phrase.forEach((element) =>{

		});
	}

	showMatchedLetter() {

	}


} /* Phrase */