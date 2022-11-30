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
    if(window.innerWidth > 850){
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