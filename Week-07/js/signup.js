const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	Name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	LastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/,
	dni: (/^[0-9]+([.][0-9]+)?$/),
	location: /^([a-zA-Z0-9_-]){1,16}$/,
	zip: /^\d{4,5}$/,
	address: /[a-zA-Z0-9\s]+(\.)?/
}

const campos = {
	Name: false,
	LastName: false,
	password: false,
	email: false,
	phone: false,
	dni: false,
	address: false,
	zip: false,
	location: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "Name":
			validarCampo(expresiones.Name, e.target, 'Name');
			break;
		case "LastName":
			validarCampo(expresiones.LastName, e.target, 'LastName');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
			break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
			break;
		case "DNI":
			validarCampo(expresiones.dni, e.target, 'DNI');
			break;
		case "zip":
			validarCampo(expresiones.zip, e.target, 'zip');
			break;
		case "location":
			validarCampo(expresiones.location, e.target, 'location');
			break;
	}
}
const Date = document.getElementById('Date')
window.addEventListener('load', function () {

	Age.addEventListener('change', function () {
		if (this.value) {
			console.log(this.value)
		}
	});

});
const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo-password2`).classList.add('formulario-grupo-incorrecto');
		document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-correcto');
		document.querySelector(`#grupo-password2 .formulario-input-error`).classList.add('formulario-input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo-password2`).classList.remove('formulario-grupo-incorrecto');
		document.getElementById(`grupo-password2`).classList.add('formulario-grupo-correcto');
		document.querySelector(`#grupo-password2 .formulario-input-error`).classList.remove('formulario-input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.Name && campos.LastName && campos.password && campos.email && campos.phone && campos.Address && campos.dni && campos.zip && campos.Age && campos.location && terminos.checked) {
		formulario.reset();

		document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario-grupo-correcto');
		});
	} else {
		document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
	}
});

formulario.addEventListener("submit", function (event) {
	fetch(`https://api-rest-server.vercel.app/login?email=` + email.value
		+ '&password=' + password.value
		+ '&Name=' + Name.value
		+ '&DNI=' + DNI.value
		+ '&phone=' + phone.value
		+ '&location=' + location.value
		+ '&zip=' + zip.value
		+ '&password2=' + password2.value
		+ '&LastName=' + LastName.value
		+ '&Address=' + Address.value
		+ '&Age=' + Age.value, {
	})
		.then(function (response) {
			alert("Welcome");
			return response.json();
		})
		.then(function (data) {
			if (data.success) {
				alert(data.msg)
				localStorage.setItem('email', email.value)
				localStorage.setItem('password', password.value)
				localStorage.setItem('Name', Name.value)
				localStorage.setItem('LastName', LastName.value)
				localStorage.setItem('phone', phone.value)
				localStorage.setItem('DNI', DNI.value)
				localStorage.setItem('location', location.value)
				localStorage.setItem('password2', password2.value)
				localStorage.setItem('zip', zip.value)
				localStorage.setItem('Address', Address.value)
			} else {
				alert('error', data.msg)
			}
		})
		.catch(function (error) {
			console.log(error)
			alert("error");
		});
});


