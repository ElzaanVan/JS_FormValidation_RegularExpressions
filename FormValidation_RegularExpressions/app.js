//Event Listener
const name = document.getElementById("name").addEventListener("blur", validateName);

const email = document.getElementById("email").addEventListener("blur", validateEmail);

const phoneNumber = document.getElementById("phone-number").addEventListener("blur", validateNumber);

//Validate
//Name
function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;                      //Validate name from a to z in small or capital letters, between 2 and 10

  if(!re.test(name.value)){                           //If re test does not match name.value - add the is-invalid class to throw an error
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid")               //Else remove the class-name
  }
  
}

//Validate
//Email
function validateEmail() {
  const email = document.getElementById("email")
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/  //regular expression to validate an email

  if(!re.test(email.value)){                           //If re test does not match name.value - add the is-invalid class to throw an error
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid")               //Else remove the class-name
  }

}

//Validate
//Number
function validateNumber() {
  const number = document.getElementById("phone-number");
  const re = /^[0-9]{10}$/

  if(!re.test(number.value)){                           //If re test does not match name.value - add the is-invalid class to throw an error
    number.classList.add("is-invalid");
  } else {
    number.classList.remove("is-invalid")               //Else remove the class-name
  }
}