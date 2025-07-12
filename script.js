//your JS code here. If required.

const form = document.getElementById('myForm');

form.addEventListener("submit" , function (event){
	event.preventDefault();

	const userData = event.target;

	let firstName = userData.elements["FirstName"].value.trim();
	let lastName = userData.elements["LastName"].value.trim();
	let phone = userData.elements["PhoneNumber"].value.trim();
	let email = userData.elements["EmailID"].value.trim();

	alert(`FirstName: ${firstName} LastName: ${lastName} Phone Number: ${phone} Email ID: ${email}`);

	// form.reset();
})