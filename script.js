//your JS code here. If required.

const form = document.getElementById('myForm');

form.addEventListener("submit" , function (event){
	event.preventDefault();

	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;
	let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;

	alert(
		`FirstName: ${firstName} LastName: ${lastName} Phone Number: ${phone} Email ID: ${email}` 
	)

	form.reset();
})