function getEMImage (num) {
	return "<img src='images/header_images/EM/em_" + num + ".jpg' />";
}


function getRandomEMNumber (alreadyPicked) {
	var ceiling = 10;
	
	var pick = Math.round(Math.random() * (ceiling - 1)) + 1;
	
	if (pick == alreadyPicked) {
		return getRandomNumber(alreadyPicked);
	} else {
		return pick;
	}
}

function getEMAPImage (num) {
	return "<img src='images/header_images/EMAP/emap_" + num + ".jpg' />";
}


function getRandomEMAPNumber (alreadyPicked) {
	var ceiling = 2;
	
	var pick = Math.round(Math.random() * (ceiling - 1)) + 1;
	
	if (pick == alreadyPicked) {
		return getRandomNumber(alreadyPicked);
	} else {
		return pick;
	}
}

function getFISSImage (num) {
	return "<img src='images/header_images/FISS/fiss_" + num + ".jpg' />";
}


function getRandomFISSNumber (alreadyPicked) {
	var ceiling = 4;
	
	var pick = Math.round(Math.random() * (ceiling - 1)) + 1;
	
	if (pick == alreadyPicked) {
		return getRandomNumber(alreadyPicked);
	} else {
		return pick;
	}
}


function getLYSOImage (num) {
	return "<img src='images/header_images/LYSO/lyso_" + num + ".jpg' />";
}


function getRandomLYSONumber (alreadyPicked) {
	var ceiling = 4;
	
	var pick = Math.round(Math.random() * (ceiling - 1)) + 1;
	
	if (pick == alreadyPicked) {
		return getRandomNumber(alreadyPicked);
	} else {
		return pick;
	}
}



function getORGAImage (num) {
	return "<img src='images/header_images/ORGA/orga_" + num + ".jpg' />";
}


function getRandomORGANumber (alreadyPicked) {
	var ceiling = 6;
	
	var pick = Math.round(Math.random() * (ceiling - 1)) + 1;
	
	if (pick == alreadyPicked) {
		return getRandomNumber(alreadyPicked);
	} else {
		return pick;
	}
}


