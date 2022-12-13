const items = document.querySelector('#contenedor_productos')
let carrito = {}

items.addEventListener('click', (e) => {
    addCart(e)
})

const addCart = e => {

    if(e.target.classList.contains('btn-compra')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()

}

const setCarrito = objeto => {
    console.log(objeto)
}