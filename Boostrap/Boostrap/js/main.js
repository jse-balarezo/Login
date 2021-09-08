const email = document.getElementById('email');
const name = document.getElementById('nombre');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const invalid = document.getElementById('invalid')
const form = document.querySelector('.form')
var expresionesregulares = {
    email1: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    name1: /^[A-Z\s]{10,80}$/,
    passwordexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
}
function validarRegistro(email, name, password1, password2) {
    form.addEventListener('submit', (e) => e.preventDefault())
    let testemail = expresionesregulares.email1.test(email.value)
    let testname = expresionesregulares.name1.test(name.value)
    let testpassword = expresionesregulares.passwordexp.test(password1.value)
    let testpassword2 = expresionesregulares.passwordexp.test(password2.value)

    if (testemail === true) {
        email.style.border = '1px solid hsl(0, 80%, 86%)'

    }
    else {
        email.style.border = '2px solid red'
        invalid.textContent = 'Correo Incorrecto verifiquelo'
        invalid.className = 'text-danger'
    }
    if (testname === true) {
        name.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        name.style.border = '2px solid red'
        invalid.textContent = 'Nombre Incorrecto Debe Ingresarlo solo en Mayusculas'
        invalid.className = 'text-danger'
    }
    if (testpassword === true) {
        password1.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        password1.style.border = '2px solid red'
        invalid.textContent = 'Contraseña incorrecta ingresela nuevamente'
        invalid.className = 'text-danger'
    }
    if (testpassword2 === true) {
        password2.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        password2.style.border = '2px solid red'
        invalid.textContent = 'las contraseñas no coinciden'
        invalid.className = 'text-danger'
    }
    if (testemail && testname && testpassword && testpassword2 == true && password1.value === password2.value) {
        invalid.style.display = 'block'
        invalid.textContent = 'Datos Validados'
        invalid.className = 'text-success'
    }
    else {
        invalid.style.display = 'block'
        invalid.textContent = 'Verifique sus datos e intente denuevo'
        invalid.className = 'text-danger'
    }
}