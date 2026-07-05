/* SCRIPT PARA EL BOTON HAMBURGUESA --------------------------------------------------------------------------------*/

/* VARIABLES GLOBABALES Y CONSTANTES --------------------------------------------------------------------------------*/
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');
const carritoLateral = document.getElementById('carrito-lateral');
const contenedorCarrito = document.getElementById('carrito-items');
const txtPrecioTotal = document.getElementById('precio-total');
const btnTienda = document.getElementById('btn-ir-tienda');

// Estado del Carrito
let carrito = JSON.parse(localStorage.getItem('carrito_bonsais')) || [];

/* BOTON PRINCIPAL LLEVA A TIENDA POR ID --------------------------------------------------------------------------------*/

if (btnTienda) {
    btnTienda.addEventListener('click', () => {
        window.location.href = "paginas/tienda.html";
    });
}


/* SCRIPT MENUR HAMBURGUESA --------------------------------------------------------------------------------- */

if (bar) {
    bar.addEventListener('click', (e) => {
        e.preventDefault();
        navbar.classList.add('active');
    });
} else {
    console.log("ERROR");
}

if (close) {
    close.addEventListener('click', (e) => {
        e.preventDefault();
        navbar.classList.remove('active');
    });
}


/* SCRIPT PARA ARMAR LA TIENDA CON LA API Y PARA VOLTEAR TARJETAS CON LA DESCRIPCCION ----------------------------------------------------*/

const API = "https://6a3d8a6dd8e212699e23fa45.mockapi.io/tienda-bonsai/TiendaBonsai";

document.addEventListener("DOMContentLoaded", () => {
    const contenedorTienda = document.getElementById('contenedor-tienda');

    if (contenedorTienda) {
        cargarTienda(contenedorTienda);
    }
    
    actualizarInterfazCarrito();
});

function cargarTienda(contenedor) {
    contenedor.innerHTML = "<p class='cargando'>Cargando los mejores ejemplares...</p>";

    fetch(API)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error al conectar con la base de datos");
            }
            return respuesta.json();
        })
        .then(productos => {
            contenedor.innerHTML = "";

            productos.forEach(item => {
                
                const idReal = item.id || item._id || Math.random().toString();

                const tarjeta = document.createElement('div');
                tarjeta.className = 'producto';

                
                tarjeta.innerHTML = `
                    <img class="img-producto" src="../${item.image}" alt="${item.title}">
                    <div class="producto-descripcion">
                        <span>${item.scientificName}</span>
                        <h5>${item.title}</h5>
                        <h4>$${item.price}</h4>
                    </div>
                    <div class="descripcion-larga">
                        <h5 style="color: rgb(5, 62, 3); margin-bottom: 10px;">Descripción:</h5>
                        <p>${item.description || 'Sin descripción disponible por el momento.'}</p>
                    </div>
                    <a href="#" class="carrito">
                        <i class="fal fa-shopping-cart"></i> Comprar
                    </a>
                `;

                
                const btnComprar = tarjeta.querySelector('.carrito');
                btnComprar.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Evita que la tarjeta se dé vuelta
                    
                    
                    const productoAEnviar = {
                        id: idReal,
                        title: item.title,
                        price: Number(item.price),
                        image: item.image
                    };

                    console.log("Producto detectado para enviar:", productoAEnviar);
                    agregarAlCarrito(productoAEnviar);
                });

                
                tarjeta.addEventListener('click', (e) => {
                    if (e.target.closest('.carrito')) {
                        return; 
                    }
                    tarjeta.classList.toggle('volteada');
                });

                contenedor.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error("Hubo un error en la tienda:", error);
            contenedor.innerHTML = "<p style='color: #721c24; grid-column: 1/-1; text-align: center;'>No pudimos cargar los productos en este momento. Por favor, reintentá más tarde.</p>";
        });
}


/* SCRIPT DEL CARRITO LATERAL Y "FACTURA" --------------------------------------------------------------------------- */

const botonBolsaHeader = document.querySelector('.carrito-container a');
const botonCerrarCarrito = document.getElementById('carrito-cerrar');

if (botonBolsaHeader) botonBolsaHeader.addEventListener('click', (e) => { e.preventDefault(); carritoLateral.classList.add('active'); });
if (botonCerrarCarrito) botonCerrarCarrito.addEventListener('click', (e) => { e.preventDefault(); carritoLateral.classList.remove('active'); });

if (document.getElementById('btn-proceder-pago')) {
    document.getElementById('btn-proceder-pago').addEventListener('click', () => {
        alert("Pasarela de pago próximamente...");
    });
}


function agregarAlCarrito(producto) {
    
    if (!producto || !producto.id) {
        console.error("Error crítico: Se intentó agregar un objeto inválido al carrito", producto);
        return;
    }

    const existe = carrito.find(item => item.id.toString() === producto.id.toString());

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            id: producto.id.toString(),
            title: producto.title,
            price: Number(producto.price),
            image: producto.image,
            cantidad: 1
        });
    }

    actualizarInterfazCarrito();
    
    if (carritoLateral) {
        carritoLateral.classList.add('active');
    }
}


function cambiarCantidad(id, cambio) {
    if (!id) return;
    const producto = carrito.find(item => item.id.toString() === id.toString());
    
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.id.toString() !== id.toString());
        }
    }
    actualizarInterfazCarrito();
}


function actualizarInterfazCarrito() {
    localStorage.setItem('carrito_bonsais', JSON.stringify(carrito));
    
    const contenedorFactura = document.getElementById('factura-resumen');

    contenedorCarrito.innerHTML = "";
    if (contenedorFactura) contenedorFactura.innerHTML = "";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p class='carrito-vacio'>Tu carrito está vacío.</p>";
        if (contenedorFactura) contenedorFactura.innerHTML = "<p style='font-size:0.85rem; color:#999; font-style:italic;'>Sin ítems cargados</p>";
        txtPrecioTotal.innerText = "$0";
        return;
    }

    let totalAcumulado = 0;

    carrito.forEach(item => {
        const subtotalItem = item.price * item.cantidad;
        totalAcumulado += subtotalItem;

        
        const filaItem = document.createElement('div');
        filaItem.className = 'item-carrito';
        filaItem.innerHTML = `
            <img class="img-item-carrito" src="../${item.image}" alt="${item.title}">
            <div class="info-item-carrito">
                <h6>${item.title}</h6>
                <span>$${item.price}</span>
            </div>
            <div class="controles-cantidad">
                <button class="btn-cantidad btn-menos">-</button>
                <span class="cantidad-numero">${item.cantidad}</span>
                <button class="btn-cantidad btn-mas">+</button>
            </div>
        `;
        
        filaItem.querySelector('.btn-menos').addEventListener('click', () => cambiarCantidad(item.id, -1));
        filaItem.querySelector('.btn-mas').addEventListener('click', () => cambiarCantidad(item.id, 1));
        contenedorCarrito.appendChild(filaItem);

        
        if (contenedorFactura) {
            const renglonFactura = document.createElement('div');
            renglonFactura.className = 'linea-factura';
            renglonFactura.innerHTML = `
                <span>${item.title} (x${item.cantidad})</span>
                <span>$${subtotalItem}</span>
            `;
            contenedorFactura.appendChild(renglonFactura);
        }
    });

    txtPrecioTotal.innerText = `$${totalAcumulado}`;
}