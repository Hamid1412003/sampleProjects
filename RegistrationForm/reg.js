// function updateFullName() {
//     var firstName = document.getElementById("firstName").value;
//     var middleName = document.getElementById("middleName").value;
//     var lastName = document.getElementById("lastName").value;
    
//     // Check if names contain only alphabetic characters
//     if (/^[A-Za-z]+$/.test(firstName) && /^[A-Za-z]+$/.test(middleName) && /^[A-Za-z]+$/.test(lastName)) {
//         var fullName = (firstName + " " + middleName + " " + lastName).toUpperCase();
//         document.getElementById("fullName").value = fullName;
//     } else {
//         document.getElementById("fullName").value = "Invalid names";
//     }
// }
// function validateForm() {
//     const nameInput = document.getElementById("name");
//     const errorMessage = document.getElementById("error-message");
  
//     if (nameInput.value.trim() === "") {
//       errorMessage.textContent = "Name is required!";
//       nameInput.classList.add("error");
//     } else {
//       errorMessage.textContent = "";
//       nameInput.classList.remove("error");
//       // Perform further form submission or processing
//     }
// }




function updateFullName() {
  var firstName = document.getElementById("first_name").value;
  var secondName = document.getElementById("second_name").value;
  var lastName = document.getElementById("last_name").value;
  var fullNameField = document.getElementById("full_name");
  var error1 = "";
  var error2 = "";
  var error3 = "";

  // Validation for first name
  if (firstName.length < 3 || firstName.length > 25 || !/^[a-zA-Z\s]*$/.test(firstName)) {
      error1 = "3-25 characters in camelcase and only letters";
  } else if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
      error1 = "First letter must be capitalized";
  }

  // Validation for second name
  if (secondName.length < 3 || secondName.length > 25 || !/^[a-zA-Z\s]*$/.test(secondName)) {
      error2 = "3-25 characters and only letters";
  } else if (secondName.charAt(0) !== secondName.charAt(0).toUpperCase()) {
      error2 = "First letter must be capitalized";
  }

  // Validation for last name
  if (lastName.length < 1 || lastName.length > 25 || !/^[a-zA-Z\s]*$/.test(lastName)) {
      error3 = "1-25 characters and only letters";
  } else if (lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
      error3 = "First letter must be capitalized";
  }

  // Update the full name and error messages
  if (!error1 && !error2 && !error3) {
      fullNameField.value = (firstName.replace(/\s/g, '') + " " + secondName.replace(/\s/g, '') + " " + lastName.replace(/\s/g, ''));
  } else {
      fullNameField.value = "";
  }

  document.getElementById("error_message1").textContent = error1;
  document.getElementById("error_message2").textContent = error2;
  document.getElementById("error_message3").textContent = error3;
}


function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    
    const dob = new Date(dobInput.value);
    const today = new Date();

    if (isNaN(dob)) {
        ageInput.value = 'Invalid'; // Display 'Invalid' for invalid date of birth
        return;
    }

    const age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

    if (age <= 18 || age >= 56)  {
        ageInput.value = 'Invalid'; // Display 'Invalid' for zero or negative age
    } else {
        ageInput.value = age;
    }
}
function validateEmail() {

    var emailInput = document.getElementById('email');
    var emailMessage = document.getElementById('emailMessage');

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var email = emailInput.value;

    if (emailPattern.test(email)) {
        emailMessage.textContent = 'Valid email';
        emailMessage.style.color = 'green';
    } else {
        emailMessage.textContent = 'Invalid email. Please enter a valid email address.';
        emailMessage.style.color = 'red';
    }
}

function validateCountryCode(input) {
  const countryCode = input.value;

  if (+/^\d{1,4}$/.test(countryCode)) {
      document.getElementById("countryCodeValidationMessage").textContent = "Valid country code";
  } else {
      document.getElementById("countryCodeValidationMessage").textContent = "Invalid country code. Please enter up to 4 digits.";
  }
}

function validateMobileNumber(input) {
  const mobileNumber = input.value;

  if (/^\d{10}$/.test(mobileNumber)) {
      document.getElementById("validationMessage").textContent = "Valid mobile number";
  } else {
      document.getElementById("validationMessage").textContent = "Invalid mobile number. Please enter a 10-digit number.";
  }
}



// function validateMobileNumber(input) {
//     const mobileNumber = input.value;

//     if (/^\d{10}$/.test(mobileNumber)) {
//         document.getElementById("validationMessage").textContent = "Valid mobile number";
//     } else {
//         document.getElementById("validationMessage").textContent = "Invalid mobile number. Please enter a 10-digit number." ;
//     }
// }

// password


const createPw = document.querySelector("#create_pw"),
 confirmPw = document.querySelector("#confirm_pw"),
 pwShow = document.querySelector(".show"),
 alertIcon = document.querySelector(".error"),
 alertText= document.querySelector(".text"),
 submitBtn = document.querySelector("#button");

 pwShow.addEventListener("click", ()=>{
   if((createPw.type === "password") && (confirmPw.type === "password")){
     createPw.type = "text";
     confirmPw.type = "text";
     pwShow.classList.replace("fa-eye-slash","fa-eye");
   }else {
     createPw.type = "password";
     confirmPw.type = "password";
     pwShow.classList.replace("fa-eye","fa-eye-slash");
   }
 });

 createPw.addEventListener("input", ()=>{
   let val = createPw.value.trim()
   if(val.length >= 8){
     confirmPw.removeAttribute("disabled");
     submitBtn.removeAttribute("disabled");
     submitBtn.classList.add("active");
   }else {
     confirmPw.setAttribute("disabled", true);
     submitBtn.setAttribute("disabled", true);
     submitBtn.classList.remove("active");
     confirmPw.value = "";
     alertText.style.color = "#a6a6a6";
     alertText.innerText = "Enter at least 8 characters";
     alertIcon.style.display = "none";
   }
 });

submitBtn.addEventListener("click", ()=>{
 if(createPw.value === confirmPw.value){
   alertText.innerText = "Password matched";
   alertIcon.style.display = "none";
   alertText.style.color = "#4070F4";
 }else {
   alertText.innerText = "Password didn't matched";
   alertIcon.style.display = "block";
   alertText.style.color = "#D93025";
 }
});

