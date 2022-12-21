document.addEventListener('DOMContentLoaded', () => {  

    const compraBtn = document.querySelectorAll('#btn-compra')
    const tbody = document.querySelectorAll('.tbody')
    let carrito = []

    compraBtn.forEach(btn => {
        btn.addEventListener('click', product)
    })

    function product(e) {
        const button = e.target
        const item = button.closest('#contenedor_producto')
        const itemProducto = item.querySelector('#itemProducto').textContent
        const itemPrecio = item.querySelector('#itemPrecio').textContent
        const itemFoto = item.querySelector('#itemFoto').src
        const ItemCantidad = item.querySelector('#itemCantidad')

        const newItem = {
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
                carrito[i].cantidad ++;

                console.log(carrito)
            }
        }

        carrito.push(newItem)
        renderizarCarrito()

    }

    window.addEventListener("resize", renderizarCarrito);

    function renderizarCarrito(){

        if(window.innerWidth > 900){

            tbody.innerHTML = ""

            carrito.map(item => {

                const DOMtr = document.createElement('tr')
                DOMtr.classList.add('ItemCarrito')
                const Content = `
                <td class="flex-container-cart-product">
                    <img src=${item.foto} alt="" class="img-width">
                    <div class="flex-container-cart-text">
                        <h4>${item.producto}</h4>
                        <p>Precio: $${item.precio}</p>
                    </div>
                </td>
                <td>
                    <div class="flex-container-cart-product">
                        <button class="btn-carrito"><img src="public/images/iconos/ico-minun.svg" alt="" class="w-24"></button>
                        <p class="mx-3">${item.cantidad}</p>
                        <button class="btn-carrito"><img src="public/images/iconos/ico-plus.svg" alt="" class="w-24"></button>
                        <button class="btn-carrito"><img src="public/images/iconos/ico-delete.svg" alt="" class="w-24"></button>
                    </div>
                </td>
                <td>
                    <p>$${item.precio}</p>
                </td>`

                DOMtr.innerHTML = Content

                tbody.appendChild(DOMtr)

            })


        }else{

            tbody.innerHTML = ""

            carrito.map(item => {

                const DOMtr = document.createElement('tr')

                DOMtr.classList.add('ItemCarrito')

                const Content = `
                <td class="flex-container-cart-product">
                    <img src=${item.foto} alt="" class="img-width">
                    <div class="flex-container-cart-text">
                        <h4>${item.producto}</h4>
                        <div class="flex-container-cart-product">
                            <button class="btn-carrito"><img src="public/images/iconos/ico-minun.svg" alt="" class="w-24"></button>
                            <p class="mx-3">${item.cantidad}</p>
                            <button class="btn-carrito"><img src="public/images/iconos/ico-plus.svg" alt="" class="w-24"></button>
                            <button class="btn-carrito"><img src="public/images/iconos/ico-delete.svg" alt="" class="w-24"></button>
                        </div>
                    </div>
                </td>
                <td>
                    <p>$${item.precio}</p>
                </td>`

                DOMtr.innerHTML = Content;

                tbody[0].appendChild(DOMtr)

            })

        }

    }

})