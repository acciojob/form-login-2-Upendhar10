//your JS code here. If required.

const form = document.getElementById('myForm');

form.addEventListener("submit" , function (event){
	event.preventDefault();

	const userData = event.target;

	let firstName = userData.elements["First Name"].value.trim();
	let lastName = userData.elements["Last Name"].value.trim();
	let phone = userData.elements["Phone Number"].value.trim();
	let email = userData.elements["Email ID"].value.trim();

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);

	// form.reset();
})