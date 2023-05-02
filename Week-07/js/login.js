const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'It must have a valid email format.');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'you did not enter a valid email.');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'The password must be made up of letters and numbers.');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const url = `https://api-rest-server.vercel.app/login?email=` + email.value + '&password=' + password.value

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!email || !password) {
        alert("Please complete all the fields of the form.");
        return;
    }
    fetch(`https://api-rest-server.vercel.app/login?email=` + email.value + '&password=' + password.value, {
    })
        .then(function (response) {
            alert("Bienvenido");
            return response.json();
        })
        .then(function (data) {
            if (data.success) {
                alert(data.msg)
                localStorage.setItem('email', email.value)
                localStorage.setItem('password', password.value)
            } else {
                alert('error', data.msg)
            }
        })
        .catch(function (error) {
            console.log(error)
            alert("error");
        });
});


