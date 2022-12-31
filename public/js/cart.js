document.addEventListener('DOMContentLoaded', () => {

    let carrito = JSON.parse(localStorage.getItem('carrito'))

    const botonVaciar = document.querySelector('#boton-vaciar');
    botonVaciar.addEventListener('click', vaciarCarrito);


    function renderizarCarrito(){

        const tbody = document.querySelector('#carrito')
        tbody.innerHTML = '';

        if (carrito.length === 0) {
            tbody.innerHTML = '<p>No hay productos en el carrito</p>';
        } else {

            for (let i = 0; i < carrito.length; i++) {

                const item = carrito[i];
                const DOMtr = document.createElement('tr')
                DOMtr.setAttribute('data-product', item.producto)
                const subtotal = Number(item.precio.replace('$', '')) * item.cantidad;
                DOMtr.classList.add('itemCart')
                const Content = `
                <td class="flex-container-cart-product">
                    <img src=${item.foto} alt="" class="img-width">
                    <div class="flex-container-cart-text">
                        <h4 class="title">${item.producto}</h4>
                        <p class="carrito-desk">Precio c/u: $${item.precio}</p>
                        <div class="flex-container-cart-product carrito-movil">
                            <button class="btn-carrito removeUnit" data-id="${item.id}"><img src="public/images/iconos/ico-minun.svg" alt="" class="w-32"></button>
                            <p class="mx-3">${item.cantidad}</p>
                            <button class="btn-carrito addUnit" data-id="${item.id}"><img src="public/images/iconos/ico-plus.svg" alt="" class="w-32"></button>
                            <button class="btn-carrito delete" data-id="${item.id}"><img src="public/images/iconos/ico-delete.svg" alt="" class="w-32"></button>
                        </div>
                    </div>
                </td>
                <td id="carrito-desk">
                    <div class="flex-container-cart-product">
                        <button class="btn-carrito removeUnit" data-id="${item.id}"><img src="public/images/iconos/ico-minun.svg" alt="" class="w-32"></button>
                        <p class="mx-3">${item.cantidad}</p>
                        <button class="btn-carrito addUnit" data-id="${item.id}"><img src="public/images/iconos/ico-plus.svg" alt="" class="w-32"></button>
                        <button class="btn-carrito delete" data-id="${item.id}"><img src="public/images/iconos/ico-delete.svg" alt="" class="w-32"></button>
                    </div>
                </td>
                <td>
                    <p class="itemCartTotal">Total: $${subtotal}</p>
                </td>`
    
                DOMtr.innerHTML = Content
                tbody.appendChild(DOMtr)
    
            }
        }

        document.querySelectorAll('.addUnit').forEach(button => {
            button.addEventListener('click', event => {

                const productId = event.currentTarget.dataset.id;

                const product = carrito.find(item => item.id === productId);

                product.cantidad += 1;

                if (product.cantidad > 99) {
                    product.cantidad = "+99";
                }

                localStorage.setItem('carrito', JSON.stringify(carrito));

                renderizarCarrito();

            });
        });
    
    
        document.querySelectorAll('.removeUnit').forEach(button => {
            button.addEventListener('click', event => {
    
                const productId = event.currentTarget.dataset.id;
    
                const product = carrito.find(item => item.id === productId);

                product.cantidad -= 1

                if (product.cantidad < 1) {
                    const index = carrito.indexOf(product);
                    carrito.splice(index, 1);
                    }
                
                localStorage.setItem('carrito', JSON.stringify(carrito));
    
                renderizarCarrito();

            });
        })

        document.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', event => {

                const productId = event.currentTarget.dataset.id;

                const product = carrito.find(item => item.id === productId);
                
                const index = carrito.indexOf(product);
        
                carrito.splice(index, 1);
    
                localStorage.setItem('carrito', JSON.stringify(carrito));

                renderizarCarrito();

            });
        });

        const total = carrito.reduce((acumulador, item) => {
            const subtotal = Number(item.precio.replace('$', '')) * item.cantidad;
            return acumulador + subtotal;
        }, 0);
    
        document.querySelector('#total').textContent = `$${total}`;
        
    }


    function vaciarCarrito() {
        carrito = [];
        const totalElement = document.querySelector('#total');
        totalElement.textContent = '$0';
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
    }

    renderizarCarrito()
})