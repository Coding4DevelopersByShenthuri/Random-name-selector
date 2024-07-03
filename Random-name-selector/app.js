
var firstName = ["Surya","Arya","Vijay","Vishnu","Shanthi","Sharmi","Sri","Srikanth","Suresh","Kumar","Niranjan","Maran","Vizhi","Ezhil",];


var lastName = [""];


function getName() {
	var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' '+ lastName[Math.floor(Math.random() * lastName.length)];
	return randomName;
}

function nameQty(){
	var userQty = document.querySelector('.qty').value;
	document.querySelector('.nameList').innerHTML = '';
	if (userQty > 10) {
		document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATE';
	}
	else{
		for (var i = 0; i < userQty; i++) {
			document.querySelector('.nameList').innerHTML += getName() + '<br>';
		}
	}
}