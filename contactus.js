// contactus.js

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
	e.preventDefault();
	statusTxt.style.color = "red";
	statusTxt.style.display = "block";
	
	let xhr = new XMLHTTpRequest();
	xhr.open("POST", "send-email.php", true);
	xhr.onload = ()=>{
		if (xhr.readyState == 4 && xhr.status == 200){
			let response = xhr.response;
			if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!"))
				statusTxt.style.color = "red";
		statusTxt.innerText = response;
		}
		statusText.innerText = response;
	}
	}
	let formData = new FormData(form);
	xhr.send(formData);