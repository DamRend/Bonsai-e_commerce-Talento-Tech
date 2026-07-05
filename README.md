#  E-commerce de Bonsáis - Proyecto FrontEnd
**Nota para el docente 2.0: Hola Migue para el desarrollo de la entrega final me concentré en hacer la página de la tienda y el carrito usando js.
Para generar la tienda como no conseguí una api pública que tenga lo que necesitaba encontré una página que se llama mockapi.io que te permite crear tu propia api simple, creé la mía ingresando la información de mis productos para el json y en el apartado de imágenes ingresé la dirección física de mis imágenes que se guardan en la carpeta del proyecto. Usé java script para armar la tienda con  display grid para organizar las tarjeta con css similar al que usé para las tarjetas de la preentrega. Usé fetch llamando a la dirección que genera mockapi para tener todos los productos y armar la tienda usando for each. También usé js para hacer funcionar el botón del menú hamburguesa.

Para el carrito decidí que sea una ventana lateral y no una página. Con HTML creé los contenedores que quedan ocultos, las lista de productos y la sección para la "factura". Con CSS oculté el carrito y agregué la clase active para usarla con js.
Además agregué una funcionalidad en la tienda donde al hacer clic en la tarjeta donde no esté el botón de compra se voltea y muestra una descripción que viene desde la api usando js.
Tambien los botones de comprar del index redirecciona a la tienda.

Para armar la lógica del carrito capturo los datos que viene de la api en el botón de comprar y los mando a la función del carrito que usa un array para los productos.
Hay otra función que actualiza la interfaz del carrito inyectando nuevo HTML para que muestre los datos actualizados junto con la imagen del producto.
Además guarda el array con localStorage para que no se borre el carrito.

Tuve muchos problema con la lógica del carrito no lograba que funcione bien. Tenía un problema donde se me pisaban los productos del carrito, el primero producto se agregaba bien pelos los siguientes se pisaban sobre el primero. Resulta que era un problema de cómo obtenía el id de los productos desde la api, no lograba que se actualizaran con el botón de comprar hasta que guardé los datos ne el botón. Además me retrasó un montón el hecho de que durante todo este prueba y error me había quedado guardado en localStorage un producto corrupto sin id que me rompía toda la lógica.
Tengo que destacar que para tratar de solucionar este problema del carrito y al algún que otro inconveniente con el menú hamburguesa me ayudé de los consejos de gemini, usé esta IA durante el desarrollos como ayudante.
Gracias por leer saludos!



**Nota para el Docente: Hola Migue. Quiero usar este espacio para comentarte cómo fue el desarrollo de esta preentrega. Me costó bastante decidir qué tipo de página quería hacer. En mi cabeza tenía ideas súper complejas; después de investigar diferentes páginas de diseño, pensaba en hacer el portfolio de un artista donde a la vez vendía sus obras. Me lo imaginaba con muchos efectos, decoraciones y movimiento con mucha interactividad digamos. El asunto era que no tenía idea de cómo empezar eso era demasiado ambicioso para mí, que recién empiezo en front-end.

Bajé a la tierra y decidí hacer un e-commerce más normalito tomando como inspiración el tuyo, y pude empezar sin problemas. El HTML fue muy fluido tomé bastante inspiración del tuyo y alguna que otra parte pequeña la tomé tal cual, por ejemplo, el carrito y una parte del menú hamburguesa. Me gusta ser muy ordenada con el código cuando programo, y creo que fue el caso con el HTML. Me gustaría saber si estás de acuerdo o si se puede mejorar más.

En el caso de los dos archivos de CSS, me quedaron súper desordenados por la metodología que usé. En resumen codeaba el HTML de una parte (por ejemplo, solo la barra de navegación del header) y enseguida empezaba el CSS hasta dejarla terminada después pasaba a la siguiente parte (hero section con imagen y título principal) y así. Por eso estaba continuamente borrando, cambiando, haciendo prueba y error, y tocando otra vez lo ya terminado para que haya continuidad. Te pido que me dejes saber si esta metodología es incorrecta o poco eficiente a mí me resultó cómoda, pero, como dije, los CSS son un caos.

En este proyecto usé ia, solo gemini. La usé como enciclopedia de css más que nada. Siempre que tenía una duda con alguna propiedad o, por ejemplo, no lograba mover un texto para donde yo quería, lo consultaba con el "agente" que creé para que me ayude con el proyecto. También para todas las imágenes usé Gemini por ejemplo, para las fotos de producto de los bonsáis, le pedí que creara un prompt que generara la imagen tal como quería y que solo tuviera que cambiar el tipo de árbol, así las fotos parecían todas sacadas por la misma persona.

Donde no pude programar por mi cuenta fue con las media queries. Tenía tanto quilombo en los CSS que me fue imposible seguir los selectores de dónde era cada selector, dónde necesitaba agregar la query y cuándo agregarla. Me estaba frustrando muchísimo, así que en esta preentrega le pedí a la ia que los agregue. Si llegas a ver el código, cualquier media query está agregado por gemini. Voy a tratar de repasar esto para la entrega final para lograr entenderlo por mi cuenta. Seguramente ser mas ordenado con el css y agregar comentarios ayude bastante.

Esta preentrega incluye la página principal y la página de contacto. El README que está a continuación está hecho también con gemini, y esta nota está escrita por mí. Gracias por leer saludos!

---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------

# 🌿 Tienda de Bonsáis - E-commerce Interactivo

¡Bienvenido/a al repositorio de nuestro e-commerce de bonsáis! Este sitio web fue desarrollado como proyecto práctico para el programa **Talento Tech**, enfocado en el desarrollo FrontEnd, diseño de interfaces responsivas y consumo de APIs asincrónicas con JavaScript.

El sitio ofrece una experiencia visual armónica y natural, inspirada en el arte del cultivo de bonsáis, sumando ahora una robusta lógica de interacción y un flujo de compra completo para el usuario.

---

## 🚀 Guía de Funcionalidades del Sitio

Nuestra plataforma evolucionó de una maqueta estática a una aplicación interactiva con las siguientes características:

### 🛒 1. Tienda Dinámica (MockAPI)
* **Consumo de API Asincrónica:** Los productos ya no están hardcodeados en el HTML. Se consultan en tiempo real a una base de datos mediante `fetch()` desde **MockAPI**.
* **Estructura Inteligente:** El catálogo se organiza de forma automática con un diseño adaptativo usando **CSS Grid** (`repeat(auto-fit, minmax(300px, 1fr))`), ordenando los productos prolijamente según el espacio en pantalla.

### 🔄 2. Tarjetas Interactivas (Efecto Museo)
* **Vista en Detalle:** Las tarjetas de los productos cuentan con un sistema de volteo interactivo mediante clases dinámicas de JavaScript (`classList.toggle('volteada')`).
* **Acceso a la Descripción:** Al hacer clic en cualquier parte de la tarjeta, esta gira suavemente mediante transiciones CSS para revelar la descripción detallada, los cuidados o el origen del ejemplar.

### 🛍️ 3. Carrito Lateral y Sistema de Facturación
* **Control de Burbuja Lateral:** Menú deslizable (`#carrito-lateral`) que aparece desde el margen derecho al presionar la bolsa del header o al añadir un ítem, optimizando el espacio de navegación.
* **Persistencia con LocalStorage:** El estado de las compras del usuario se guarda en el almacenamiento del navegador. Si el usuario refresca la pantalla o cierra la pestaña, sus bonsáis seleccionados no se pierden.
* **Gestión de Cantidades Reactiva:** Permite sumar o restar copias de un ejemplar directamente con flechitas (`+` y `-`). Si la cantidad llega a cero, el ítem se remueve automáticamente.
* **Simulador de Factura Física:** Desglose en tiempo real al final del panel que simula un ticket de compra tradicional, calculando subtotales por cantidad y el valor neto final acumulado.
* **Seguridad de Eventos:** Uso estratégico de `e.stopPropagation()` para garantizar que al cliquear en el botón "Comprar" se añada el producto al carrito sin activar por error el giro de la tarjeta.

### 📱 4. Responsividad e Interfaz General
* **Navegación Móvil:** Menú tipo hamburguesa completamente funcional para pantallas táctiles.
* **Diseño 100% Responsivo:** Adaptado minuciosamente para computadoras, tablets y celulares utilizando CSS nativo, Flexbox y Media Queries.
* **Sección de Contacto Completa:** Formulario de mensajes integrado, presentación del equipo de trabajo y un mapa interactivo de ubicación geográfica.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de las diferentes vistas de la plataforma.
* **CSS3:** Estilos personalizados, diseño de grillas con **CSS Grid**, alineaciones dinámicas con **Flexbox**, y efectos de transformación 3D para el reverso de tarjetas.
* **JavaScript (Vanilla JS):** Manipulación avanzada del DOM, control de flujo asincrónico (Promesas y Fetch), manejo del almacenamiento (`localStorage`) y propagación segura de eventos del usuario.
* **MockAPI:** Servicio en la nube para simular una base de datos de productos estructurada (JSON).
* **FontAwesome (v5.10.0):** Iconografía integrada para la barra de navegación, el panel de compra y las redes sociales.
* **Google Fonts:** Tipografía "Spartan" para mantener una identidad de marca sólida y orgánica.
* **Gemini IA:** Ayudante y consejero durante el desarollo.
---

## 📂 Estructura de Archivos Principal

```text
├── index.html            # Página principal (Home y presentación)
├── script.js             # Motor lógico global (Menú, fetch de API, carrito y LocalStorage)
├── style.css             # Estilos generales del Index
├── img/                  # Recursos estáticos (Imágenes de bonsáis, banners y logos)
└── paginas/
    ├── tienda.html       # Grid de productos y estructura del carrito de compras
    ├── tienda-style.css  # Reglas de CSS Grid, animaciones de tarjetas y panel lateral
    ├── contacto.html     # Formulario, mapa e información institucional
    └── contacto-style.css # Estilos exclusivos de la interfaz de contacto