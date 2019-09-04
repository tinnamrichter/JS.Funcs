'use strict'
var a = Number(prompt('Skriv et tal'));

function addVat(a) {
		return a + (a * 0.25);
	}
function subVat(a) {
		return a - (a * 0.25);
	}
function calcVat(a) {
		return a * (a * 0.25);
	}

console.log(addVat(a), subVat(a), calcVat(a));