

function ClozeCard (text, cloze) {
	if (this instanceof ClozeCard){
		this.cloze = cloze;
		this.fullText = text;
		var clozePosition = text.search(cloze);
		if (clozePosition === -1){ 
			//throw error
			console.log("ERROR: ClozeCard could not be created because '" + cloze + "' was not found in '" + text + "'");
			this.partial = text;
		}
		else {
			var tempTextArray = text.split("");
			tempTextArray.splice(clozePosition, cloze.length, "?","?","?");
			this.partial = tempTextArray.join("");
		}
	}
	else {
		return new ClozeCard (text,cloze);
	}
}



	
module.exports = ClozeCard;

