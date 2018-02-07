// 1 funt = 1.2 euro
// 		 5 zlotych

// 1 euro = 4 zlote
// 		 0.8 funta

// 1 zloty = 0.2 funta
// 		  0.3 euro 

// funt na euro 
// x funtów * 1.2

// if (dropdown1 === funt  && dropdown2 === euro) {
// 	result = input.value * 1.2 
// }
// // =======================
// funt na zlotówki
// x funtow * 5

// if (dropdown1 === funt  && dropdown2 === zloty) {
// 	result = input.value * 5 
// }
// // ========================
// euro na zlotówki 
// x euro * 4

// if (dropdown1 === euro  && dropdown2 === zloty) {
// 	result = input.value * 4
// }
// // ==========================
// euro na funty
// x euro * 0.8

// if (dropdown1 === euro  && dropdown2 === funt) {
// 	result = input.value * 0.8
// }
// // ==========================
// zlotowki na funty
// x zlotych * 0.2

// if (dropdown1 === zloty  && dropdown2 === funty) {
// 	result = input.value * 0.2
// }
// // =============================
// zlotowki na euro
// x zlotych * 0.3

// if (dropdown1 === zloty  && dropdown2 === euro) {
// 	result = input.value * 0.3 
// }


var input = document.querySelector("input");
var submit = document.querySelector("#submit");
var displayResult = document.querySelector("#display_result");
var result;
var a = document.getElementById("currency_from").selectedIndex;
var b = document.getElementById("currency_from").selectedOptions;
 // b[a].index 
var x = document.getElementById("currency_to").selectedIndex;
var y = document.getElementById("currency_to").selectedOptions;
 // y[x].index 



submit.addEventListener("click", function() {
	myFunction();
})


function myFunction() {
	if (!input.value) {
		displayResult.textContent = "Enter correct amount of money"
	}
	else {
		// funt na euro 
		if (b[a].index === 1 && y[x].index === 2) {
			var result = toFixed(input.value) * 1.2;
		}
		// funt na zlotówki
		else if (b[a].index === 1 && y[x].index === 0) {
			var result = toFixed(input.value) * 5;
		}
		// euro na zlotówki 
		else if (b[a].index === 2 && y[x].index === 0) {
			var result = toFixed(input.value) * 4;
		}
		// euro na funty
		else if (b[a].index === 2 && y[x].index === 1) {
			var result = toFixed(input.value) * 0.8;
		}
		// zlotowki na funty
		else if (b[a].index === 0 && y[x].index === 1) {
			var result = toFixed(input.value) * 0.2;
		}
		// zlotowki na euro
		 else if (b[a].index === 0 && y[x].index === 2) {
			var result = toFixed(input.value) * 0.3;
		}
		// te same waluty
		 else {
			var result = toFixed(input.value);
		}
		displayResult.textContent = toFixed(input.value) + " " + b[a].value + ' = ' + result + " " + y[x].value;
	}
}

function toFixed(x) {
	return Number.parseFloat(x).toFixed(2);
}
