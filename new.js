import { Address, Citizen } from "./constructors.js";


//Create main, header
let main = document.createElement("main");
let header = document.getElementById("header");
header.insertBefore(main, header.children[1]);

//Create firstbutton
let firstButton = document.createElement("button");
let textButton = document.createTextNode("Create");
firstButton.appendChild(textButton);
main.insertBefore(firstButton, main.children[0]);

firstButton.id = "button";
document.getElementById("button").addEventListener("click", createNewButton);

let secondButton = document.createElement("button");
let secondTextButton = document.createTextNode("Create citizen");

let form = document.createElement("form");
let paraName = document.createElement("p");
let textParaName = document.createTextNode("Enter your firstname:");
let inputName = document.createElement("input");

let paraFname = document.createElement("p");
let textParaFname = document.createTextNode("Enter your lastname:");
let inputFname = document.createElement("input");

let paraAge = document.createElement("p");
let textParaAge = document.createTextNode("Enter your age:");
let inputAge = document.createElement("input");

let formTwo = document.createElement("form");
let paraCountry = document.createElement("p");
let textCountry = document.createTextNode("Enter your country:");
paraCountry.appendChild(textCountry);
let inputCountry = document.createElement("input");

let paraCity = document.createElement("p");
let textCity = document.createTextNode("Enter your city:");
paraCity.appendChild(textCity);
let inputCity = document.createElement("input");

let paraStreet = document.createElement("p");
let textStreet = document.createTextNode("Enter your street:");
paraStreet.appendChild(textStreet);
let inputStreet = document.createElement("input");

let paraNumber = document.createElement("p");
let textNumber = document.createTextNode("Enter the house number:");
paraNumber.appendChild(textNumber);
let inputNumber = document.createElement("input");

let registerButton = document.createElement("button");
let textRegisterButton = document.createTextNode("Register");

let stop = true;

function createNewButton() {
  if (stop) {
    main.insertBefore(form, main.children[1]);

    paraName.appendChild(textParaName);
    form.insertBefore(paraName, form.children[0]);
    form.insertBefore(inputName, form.children[1]);

    paraFname.appendChild(textParaFname);
    form.insertBefore(paraFname, form.children[3]);
    form.insertBefore(inputFname, form.children[4]);

    paraAge.appendChild(textParaAge);
    form.insertBefore(paraAge, form.children[5]);
    form.insertBefore(inputAge, form.children[5]);

    secondButton.appendChild(secondTextButton);
    form.insertBefore(secondButton, form.children[6]);
    stop = false;
  }

  form.id = "firstForm";
  inputName.id = "inputName";
  inputName.className = "field";
  inputFname.id = "inputFname";
  inputFname.className = "field";
  inputAge.id = "inputAge";
  inputAge.className = "field";
  secondButton.id = "buttonCreate";
  secondButton.setAttribute("type", "submit");

  form = document.querySelector("#firstForm");
  secondButton = form.querySelector("#buttonCreate");
  inputName = form.querySelector("#inputName");
  inputFname = form.querySelector("#inputFname");
  inputAge = form.querySelector("#inputAge");
  let fields = form.querySelectorAll(".field");

  var generateError = function (text) {
    var error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.innerHTML = text;
    return error;
  };

  var removeValidation = function () {
    var errors = form.querySelectorAll(".error");
    for (var i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
  };
  var checkValidation = function () {
    let valid = true;
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        var error = generateError("Cannot be blank");
        form[i].parentElement.insertBefore(error, fields[i]);
        valid = false;
      }
    }
    return valid;
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    removeValidation();
    const valid = checkValidation();
    if (valid) {
      createCitizen();
    }
  });
}
let alerted = false;
function createCitizen() {
  let citizen1 = new Citizen(
    document.getElementById("inputName").value,
    document.getElementById("inputFname").value,
    document.getElementById("inputAge").value,
    false
  );

  if (alerted === false) {
    alert(`${citizen1.firstname}, ${citizen1.lastname}, ${citizen1.age}`);
    alerted = true;
  }

  form.removeEventListener("submit", function (event) {
    event.preventDefault();
  });
  setTimeout(() => form.remove());
  return newFunction();
}

function newFunction() {
  main.insertBefore(formTwo, main.children[1]);
  formTwo.insertBefore(paraCountry, formTwo.children[0]);
  formTwo.insertBefore(inputCountry, formTwo.children[1]);

  formTwo.insertBefore(paraCity, formTwo.children[2]);
  formTwo.insertBefore(inputCity, formTwo.children[3]);

  formTwo.insertBefore(paraStreet, formTwo.children[4]);
  formTwo.insertBefore(inputStreet, formTwo.children[5]);

  formTwo.insertBefore(paraNumber, formTwo.children[6]);
  formTwo.insertBefore(inputNumber, formTwo.children[7]);

  registerButton.append(textRegisterButton);
  formTwo.insertBefore(registerButton, formTwo.children[8]);

  formTwo.id = "formTwo";
  inputCountry.id = "inputCountry";
  inputCountry.className = "field";
  inputCity.id = "inputCity";
  inputCity.className = "field";
  inputStreet.id = "inputStreet";
  inputStreet.className = "field";
  inputNumber.id = "inputNumber";
  inputNumber.className = "field";
  registerButton.id = "registerButton";
  registerButton.setAttribute("type", "submit");

  let fieldsOne = formTwo.querySelectorAll(".field");

  formTwo = document.querySelector("#formTwo");

  var generateErrorOne = function (text) {
    var errorOne = document.createElement("div");
    errorOne.className = "error";
    errorOne.style.color = "orange";
    errorOne.innerHTML = text;
    return errorOne;
  };

  var removeValidationOne = function () {
    var errorsOne = formTwo.querySelectorAll(".error");
    for (var i = 0; i < errorsOne.length; i++) {
      errorsOne[i].remove();
    }
  };
  var checkValidationOne = function () {
    let validTwo = true;
    for (var i = 0; i < fieldsOne.length; i++) {
      if (!fieldsOne[i].value) {
        var errorOne = generateErrorOne("Cannot be blank");
        formTwo[i].parentElement.insertBefore(errorOne, fieldsOne[i]);
        validTwo = false;
      }
    }
    return validTwo;
  };

  formTwo.addEventListener("submit", function (event) {
    event.preventDefault();
    removeValidationOne();
    const validTwo = checkValidationOne();
    if (validTwo) {
      createAddress();
    }
  });
}
let alertedOne = false;
function createAddress() {
  let address1 = new Address(
    document.getElementById("inputCountry").value,
    document.getElementById("inputStreet").value,
    document.getElementById("inputCity").value,
    document.getElementById("inputNumber").value
  );

  if (alertedOne === false) {
    alert(
      `${address1.country}, ${address1.city}, ${address1.street}, ${address1.number},`
    );
    alertedOne = true;
  }

  formTwo.removeEventListener("submit", function (event) {
    event.preventDefault();
  });
  setTimeout(() => formTwo.remove());

  setTimeout(() => finnalyFunction(), 100);
}

let alertedTwo = false;
function finnalyFunction() {
  if (alertedTwo === false) {
    alert(`Successfully registered`);
    alertedTwo = true;
  }

  alert(
    `${firstname}, ${lastname}, ${age}, ${country},  ${city},  ${street},  ${number}`
  );
  location.reload(true);
}
