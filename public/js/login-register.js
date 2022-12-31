document.getElementById("btn_register").addEventListener("click", register);
document.getElementById("btn_login").addEventListener("click", login);
window.addEventListener("resize", ancho_pagina);

// Declaracion de variables
var contenedor_login_register = document.querySelector(".box-login--register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var box_back_login = document.querySelector(".box-back-login");
var box_back_register = document.querySelector(".box-back-register");


function ancho_pagina(){
    requestAnimationFrame(function() {

        if (window.matchMedia('(min-width: 850px)').matches) {
            box_back_login.style.display = "block";
            box_back_register.style.display = "block";
        }else{
            box_back_register.style.display = "block";
            box_back_register.style.opacity = "1";
            box_back_login.style.display = "none";
            formulario_login.style.display = "block"
            formulario_register.style.display = "none"
            contenedor_login_register.style.left = "0px"
        }

    })
}

ancho_pagina();

function register(){
    if(window.innerWidth > 850) {
        formulario_register.style.display = "block"; 
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        box_back_register.style.opacity = "0";
        box_back_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block"; 
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        box_back_register.style.display= "none";
        box_back_login.style.display = "block";
        box_back_login.style.opacity = "1";
    }
    
}

function login(){
    if(window.innerWidth > 850) {
        formulario_register.style.display = "none"; 
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        box_back_register.style.opacity = "1";
        box_back_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none"; 
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        box_back_register.style.display= "block";
        box_back_login.style.display = "none";
    }
    
}

// Validaciones

const form = document.querySelector('#formulario-register');
const nameInput = form.elements.nombre_completo;
const emailInput = form.elements.email;
const passwordInput = form.elements.contrasena;
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {

    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;


    if (!name && name.length < 3) {
        alert('Por favor ingresa un nombre');
    } else if (!email) {
        alert('Por favor ingrese un email');
    } else if (!password && password.length < 8) {
        alert('Por favor ingrese una contraseña');
    }else {

        form.submit();
    }

});