document.addEventListener('DOMContentLoaded', () => {  

    const compraBtn = document.querySelectorAll('#btn-compra')

    let carrito = []

    compraBtn.forEach(btn => {
        btn.addEventListener('click', product)
    })

    function product(e) {
        const button = e.target
        const item = button.closest('#contenedor_producto')
        const itemId = item.querySelector('#btn-compra').getAttribute('data-id');
        const itemProducto = item.querySelector('#itemProducto').textContent
        const itemPrecio = item.querySelector('#itemPrecio').textContent
        const itemFoto = item.querySelector('#itemFoto').src
        const ItemCantidad = item.querySelector('#itemCantidad')

        const newItem = {
            id: itemId,
            producto: itemProducto,
            precio: itemPrecio,
            foto: itemFoto,
            cantidad: ItemCantidad || 1
        }

        addToCart(newItem)

    }

    function addToCart(newItem){

        for(let i = 0 ; i < carrito.length ; i++){
            if(carrito[i].producto.trim() == newItem.producto.trim()){
                carrito[i].cantidad ++
                return null;
            }
        }

        carrito.push(newItem)

        localStorage.setItem('carrito', JSON.stringify(carrito));

    }

})