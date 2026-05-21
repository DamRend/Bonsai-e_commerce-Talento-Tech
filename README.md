# 🌿 E-commerce de Bonsáis - Proyecto FrontEnd

📌 **Nota para el docente:** Hola, Diego. Quiero usar este espacio para comentarte cómo fue el desarrollo de esta preentrega. Me costó bastante decidir qué tipo de página quería hacer. En mi cabeza tenía ideas súper complejas; después de investigar diferentes páginas de diseño, pensaba en hacer el portfolio de un artista donde a la vez vendía sus obras. Me lo imaginaba con muchos efectos, decoraciones y movimiento con mucha interactividad digamos. El asunto era que no tenía idea de cómo empezar eso era demasiado ambicioso para mí, que recién empiezo en front-end.

Bajé a la tierra y decidí hacer un e-commerce más normalito tomando como inspiración el tuyo, y pude empezar sin problemas. El HTML fue muy fluido tomé bastante inspiración del tuyo y alguna que otra parte pequeña la tomé tal cual, por ejemplo, el carrito y una parte del menú hamburguesa. Me gusta ser muy ordenada con el código cuando programo, y creo que fue el caso con el HTML. Me gustaría saber si estás de acuerdo o si se puede mejorar más.

En el caso de los dos archivos de CSS, me quedaron súper desordenados por la metodología que usé. En resumen codeaba el HTML de una parte (por ejemplo, solo la barra de navegación del header) y enseguida empezaba el CSS hasta dejarla terminada después pasaba a la siguiente parte (hero section con imagen y título principal) y así. Por eso estaba continuamente borrando, cambiando, haciendo prueba y error, y tocando otra vez lo ya terminado para que haya continuidad. Te pido que me dejes saber si esta metodología es incorrecta o poco eficiente a mí me resultó cómoda, pero, como dije, los CSS son un caos.

En este proyecto usé ia, solo gemini. La usé como enciclopedia de css más que nada. Siempre que tenía una duda con alguna propiedad o, por ejemplo, no lograba mover un texto para donde yo quería, lo consultaba con el "agente" que creé para que me ayude con el proyecto. También para todas las imágenes usé Gemini por ejemplo, para las fotos de producto de los bonsáis, le pedí que creara un prompt que generara la imagen tal como quería y que solo tuviera que cambiar el tipo de árbol, así las fotos parecían todas sacadas por la misma persona.

Donde no pude programar por mi cuenta fue con las media queries. Tenía tanto quilombo en los CSS que me fue imposible seguir los selectores de dónde era cada selector, dónde necesitaba agregar la query y cuándo agregarla. Me estaba frustrando muchísimo, así que en esta preentrega le pedí a la ia que los agregue. Si llegas a ver el código, cualquier media query está agregado por gemini. Voy a tratar de repasar esto para la entrega final para lograr entenderlo por mi cuenta. Seguramente ser mas ordenado con el css y agregar comentarios ayude bastante.

Esta preentrega incluye la página principal y la página de contacto. El README que está a continuación está hecho también con gemini, y esta nota está escrita por mí. Gracias por leer saludos!

---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------

¡Bienvenido/a al repositorio de nuestro e-commerce de bonsáis! Este sitio web fue desarrollado como proyecto práctico para el programa **Talento Tech**, enfocado en el desarrollo FrontEnd y diseño de interfaces web responsivas.

El sitio está diseñado para ofrecer una experiencia visual armónica y natural, inspirada en el arte del cultivo de bonsáis, conectando a los usuarios con la naturaleza desde cualquier dispositivo.

---

## 🚀 Características del Proyecto

* **Diseño 100% Responsivo:** Adaptado minuciosamente para una visualización óptima en Computadoras, Tablets y Celulares utilizando CSS Media Queries.
* **Interfaz Estilizada:** Paleta de colores orgánicos (tonos verdes y tierra), degradados modernos y tipografías cuidadas.
* **Sección de Contacto Completa:** Incluye un formulario de mensajes optimizado para el usuario, tarjetas de presentación del equipo de trabajo y un mapa interactivo de ubicación.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica y limpia de las diferentes páginas del sitio.
* **CSS3:** Estilos personalizados, Flexbox para la distribución de elementos, transiciones suaves y layouts fluidos.
* **FontAwesome (v5.10.0):** Iconografía para la barra de navegación, redes sociales y detalles de la interfaz.
* **Google Fonts:** Tipografía "Spartan" para mantener una identidad de marca sólida.

---

## 📂 Estructura de Archivos Principal

```text
├── index.html          # Página principal (Home y catálogo de productos)
├── style.css           # Estilos generales y responsive del Index
├── img/                # Carpeta de recursos estáticos (imágenes y logos)
└── paginas/
    ├── contacto.html   # Página de contacto y "Quiénes somos"
    └── contacto-style.css # Estilos exclusivos y responsive de contacto