const form = document.getElementById("formRegister");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");

const USERNAME = ["rafa", "jorge", "ignacio", "pedro"];

// validate on input
nombre.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

// validate on submit
form.addEventListener("submit", (e) => {
  validateUsername();
  validateName();
  validateEmail();
  validatePhone();

  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
  }
});

function validateUsername() {
  if (USERNAME.includes(username.value)) {
    username.setCustomValidity("El usuario existe en nuestra BBDD 🎂");
  } else {
    username.setCustomValidity("");
  }
}

function validateName() {
  if (nombre.value.length < 3) {
    nombre.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
  } else {
    nombre.setCustomValidity("");
  }
}

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Ingresa un correo electrónico válido.");
  } else {
    email.setCustomValidity("");
  }
}

function validatePhone() {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.setCustomValidity("El teléfono debe tener formato: (XXX) XXX-XXXX");
  } else {
    phone.setCustomValidity("");
  }
}
