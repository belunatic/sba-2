//form
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const liveMessage = document.querySelector("#form-message");
//error message
let formMessage = "";
//email regex
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const handleSubmit = (e) => {
	e.preventDefault();
	//reset form message
	formMessage = "";
	let emailValid = false;
	//check email validation
	if (!emailRegEx.test(emailInput.value)) {
		formMessage += "Please enter a valid email address.";
		liveMessage.classList.remove("success");
		liveMessage.classList.add("error");
	} else {
		formMessage = "";
		emailValid = true;
	}
	//submit form
	if (!emailValid) {
		liveMessage.innerText = `${formMessage}`;
	} else {
		//reset form
		form.reset();
		liveMessage.classList.remove("error");
		liveMessage.classList.add("success");
		liveMessage.innerText = `We have received your message, we will get back to you within 24 hours`;
	}
};

form.addEventListener("submit", handleSubmit);
