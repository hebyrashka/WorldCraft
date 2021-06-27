const modalNavBar = document.getElementsByClassName('li--modal-nav-bar');
const paragrafeAgree = document.getElementsByClassName('a--menu');
const checkboxAgree = document.getElementById('checkbox--agree');
const submitButton = document.getElementById('button--submit');
const modalExit = document.getElementsByClassName('a--modal-exit');
const modalBackground = document.getElementById('modal-background');
const footer = document.getElementById('footer');
const modalBody = document.getElementById('modal-body');
const modalPrivilegeBody = document.getElementById('modal-privilege-body');
const modalConfidentialityBody = document.getElementById('modal-confidentiality-body')
const terms = document.getElementById('terms');
const modalHeaderTitle = document.getElementById('modal-header-title');
const termsPay = document.getElementById('modal-terms-pay-body');
const htmlMain = document.getElementById('html');

const donateRule = document.getElementById('modal-body__donate-rule');
const gameRule = document.getElementById('modal-body__game-rule');
const chatRule = document.getElementById('modal-body__chat');

setInterval(function() {
	if (checkboxAgree.checked) {
		submitButton.removeAttribute('disabled');
	}
	else {
		submitButton.setAttribute('disabled', 'true');
	}
	if (modalBackground.style.display == "block") {
		document.body.style.overflow = "hidden";
		htmlMain.overflow = "hidden";
	}
	else {
		document.body.style.overflow = "auto";
		htmlMain.overflow = "scroll";
	}
}, 10);
modalNavBar[0].onclick = function() {
	donateRule.style.display = "block";
	gameRule.style.display = "none";
	chatRule.style.display = "none";

	modalNavBar[0].classList.add("active");
	modalNavBar[1].classList.remove("active");
	modalNavBar[2].classList.remove("active");


}
modalNavBar[1].onclick = function() {
	donateRule.style.display = "none";
	gameRule.style.display = "block";
	chatRule.style.display = "none";

	modalNavBar[0].classList.remove("active");
	modalNavBar[1].classList.add("active");
	modalNavBar[2].classList.remove("active");
}
modalNavBar[2].onclick = function() {
	donateRule.style.display = "none";
	gameRule.style.display = "none";
	chatRule.style.display = "block";

	modalNavBar[0].classList.remove("active");
	modalNavBar[1].classList.remove("active");
	modalNavBar[2].classList.add("active");
}
paragrafeAgree[0].onclick = function() {
	modalBackground.style.display = "block";
	modalBody.style.display = "block";
	modalPrivilegeBody.style.display = "none";
	modalConfidentialityBody.style.display = "none";
	termsPay.style.display = "none";
	modalHeaderTitle.innerHTML = "Соглашение";
}
paragrafeAgree[1].onclick = function() {
	modalBackground.style.display = "block";
	modalBody.style.display = "none";
	modalPrivilegeBody.style.display = "block";
	modalConfidentialityBody.style.display = "none";
	termsPay.style.display = "none";
	modalHeaderTitle.innerHTML = "Возможности привилегий";
}
paragrafeAgree[2].onclick = function() {
	modalBackground.style.display = "block";
	modalBody.style.display = "none";
	modalPrivilegeBody.style.display = "none";
	modalConfidentialityBody.style.display = "block";
	termsPay.style.display = "none";
	modalHeaderTitle.innerHTML = "Конфиденциальность";
}
terms.onclick = function() {
	modalBackground.style.display = "block";
	modalBody.style.display = "none";
	modalPrivilegeBody.style.display = "none";
	modalConfidentialityBody.style.display = "none";
	termsPay.style.display = "block";
	modalHeaderTitle.innerHTML = "Условия оплаты";
}
for (var i = 0; i < modalExit.length; i++) {
	modalExit[i].onclick = function() {
	modalBackground.style.display = "none";
	}
}
