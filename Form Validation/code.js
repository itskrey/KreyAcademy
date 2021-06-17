let form = document.getElementById('Form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let pw = document.getElementById('pass')
let repPw = document.getElementById('rep-pass')

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    //Check if every field is filled
    if(name.value.length == 0 || email.value.length == 0 || pw.value.length == 0 || repPw.value.length == 0){
        alert('Debes rellenar todos los campos')
    }

    //Check if there is a valid email
    if(!validateEmail(email.value)){
        alert('Especifica un email correcto para continuar.')
    }

    //Check if passwords match
    if(! (pw.value === repPw.value)){
        alert('Error: las contraseñas no concuerdan. Inténtelo de nuevo.')
    }

    alert("Gracias por completar el formulario")

})



function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}