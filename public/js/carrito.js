window.addEventListener("resize", ancho_pagina);

function ancho_pagina(){
    if(window.innerWidth > 900){
        carritoDesk.style.display = "block";
        carritoMovil.style.display = "none";
    }else{
        carritoDesk.style.display = "none";
        carritoMovil.style.display = "block";
    }
}