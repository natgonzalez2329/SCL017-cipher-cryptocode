## README 

# CIPHER - CRYPTOCODE

## Índice

* [1. Descripción general](#1-descripción-general)
* [2. Prototipo y diseño](#2-prototipo-y-diseño)
* [3. Perfil de usuarios](#3-perfil-de-usuarios)
* [4. Modo de usuarios](#4-modo-usuarios)
* [5. Tecnología](#5-tecnología)
* [6. Objetivos planteados](#6-objetivos-planteados)
* [7. Enlace web](#7-enlace-web)

***

## 1. Descripción general
Cryptocode es una página web que ofrece el servicio de encriptar cualquier información de índole personal y confidencial (datos personales, bancarios, contraseñas, cuentas de servicios y suscripciones, etc.), con el fin de protegerla. Sabemos que la mayoría de las personas tienen diferentes cuentas y por consiguiente claves, también información sensible que anotar o guardar en dispositivos o materiales, quedando esta información confidencial y privada vulnerada. Por lo que creemos que al crear un sitio web donde podrás transformar dicha información  en criptograma que tengas a la mano cuando la necesites, es una necesidad. Es una gran medida de seguridad y privacidad, de manera que sólo pueda leerlo, manejarlo y dar uso de la misma aquel que cuente con la clave de cifrado(offset) adecuada para descodificarlo, estos datos al estar cifrados aunque se produzca un acceso no autorizado o sea vulnerado la ubicación y privacidad de estos datos, no estarán legibles puesto que sólo se tendrá acceso a información codificada.

## 2. Prototipo y diseño
 
Prototipo inicial
![prototipo-inicial](./src/images/prototipo-inicial.jpeg)

El diseño del prototipo se baso en el objetivo del proyecto, que es cifrar  y descifrar cualquier información. De esta manera me inspire en el diseño tipo traductor.

Luego esta idea principal la plasme, en la plataforma Figma, haciendo un prototipo digital de baja fidelidad para tener mas claro la distribución de los elementos y que colores implementar en el proyecto. La paleta de colores predominante que escogí fue azul en diferentes tonalidades, gris, para el aspecto de la página en general.

 Por lo tanto el layout o esquema de distribución de los elementos dentro de la página se desarrollo de la siguiente forma; se creo un Home como página principal el cual contiene el nombre de la página, eslogan y el cifrador. 

 ![prototipo-final-cipher](./src/images/pt1-home-figma.png)

En el cifrador se implementa dos cuadros de texto, para que el usuario pueda escribir el texto original que quiere encriptar y el otro para que se muestre el criptograma, dichos cuadros de textos simulan el estilo de una terminal con fondo negro, para darle un estilo de mensaje secreto o mensaje encryptado en códigos de computador. 

Entre ambos cuadros de texto se situo los elementos para cifrar/descifrar, ubicandolos en esta parte para que el usuario lo tenga a la vista con alcance más rápido. Consta de un numerador para determinar la clave de cifrado(offset), y de dos botones para cifrar y descifrar.

En la parte superior de la página se ubico tres botones, los cuales tienen acceso a Home como página principal, y sub-páginas como About (breve descripción) y Contact (redes de la página).

![prototipo-final-about](./src/images/pt2-about-figma.png)
![prototipo-final-contact](./src/images/pt3-contact-figma.png)

Posterior al diseño del prototipo de baja fidelidad, solicite feedback a mis compañeras, con respecto al diseño e interacción, obtuve como resultado:
- Mejorar el diseño a que sea mas llamativo, que no fuera tan plano.
- Agregar colores mas vivos.
- Estilizar diseño de botones y cuadros de texto.
- Cambiar tipo de letra de los cuadros de texto a tipo terminal y aumentar tamaño.
- Agregar favicon.
- Agregar imagen referente al tema del proyecto.

Todas estas sugerencias las lleve a cabo, en el proyecto final, implemente como objetivo principal mejorar el estilo y diseño de la página a mas minimalista y en ese sentido:

* Elegí una imagen de un candado que me represento cifrar, encriptado, tecnología, actual. Manteniendo el color azul como referente pero esta vez de una forma más llamativa. Esta imagen decidí ponerla de fondo en cada sección, la cual estiliza y genera una sensación de profesionalismo, seguridad y actualidad, resaltando los elementos de interés y agradable a la vista.
* Estilice los cuadros de texto redondeando los bordes, cambie el tipo de letra de aspecto fuente de Terminal, para darle más sentido y tenga concordancia a mi idea inicial. También el color y tipo de letra del cuadro de texto original es diferente al cuadro de texto del criptograma.
* Estilice también los botones redondeando los botones, y puse iconos simbólicos de cifrar/descifrar a candados cerrado/abierto, respectivamente. Dichos iconos guardan concordancia con la imagen de fondo de la página, siguiendo la tematica principal de cifrado. 
* Finalmente, para mayor interactividad, agregue botón de copiar, limpiar e informativo, con sus respectivos iconos simbólicos.

![proyecto-final1](./src/images/pcipher1.png)
![proyecto-final2](./src/images/pcipher2.png)
![proyecto-final3](./src/images/pcipher3.png)


## 3. Perfil de usuarios
El servicio de cifrado/descifrado de cualquier tipo de información de obtención gratuita y rápida, va dirigido a todas aquellas personas, principalmente adultos de edad joven, media o avanzada edad,  que tienen la necesidad de salvaguardar sus datos o información de carácter privada y/o confidencial, aquellas personas que se sientan identificadas con las circunstancias de vulnerabilidad que actualmente tenemos en la web o directamente desde el ordenador.

## 4. Modo de usuarios
Una vez que se accede a la página Cryptocode, se tiene acceso a traves de tres botones a la página principal y las subpáginas.
1. Al acceder a página principal (_Home_), tendra acceso al cifrador.

Para cifrar se le permite al usuario:
* Escribir el mensaje (texto original) que quiere cifrar en el primer cuadro de texto.
* En el numerador indicar clave de cifrado ((_offset_)) determinando cuántas posiciones quiere que
  el cifrado desplace **cada letra** del mensaje.
* Al hacer click en el boton de cifrar(_candado cerrado_), se verá el resultado del mensaje cifrado, en el segundo cuadro de texto, el cual tiene la propiedad de readonly, que no permite modificar el criptograma, solo copiarlo.

Para descifrar se le permite al usuario:
* Escribir o copiar el mensaje (texto cifrado) que quiere descifrar en el primer cuadro de texto.
* En el numerador indicar clave de cifrado ((_offset_)) que se utilizó para cifrar el mensaje.
* Al hacer click en el boton de descifrar (_candado abierto_), puede ver y obtener el resultado del mensaje descifrado en el segundo cuadro de texto.

La información obtenida puede ser copiada automáticamente en su respectivo botón, ubicado en la parte superior derecha del segundo cuadro de texto. Si desea cifrar cualquier otra información, puede limpiar los cuadros de texto con el botón ubicado entre los cuadros de textos, inmediatamente en la parte inferior de los botones cifrar/descifrar, respectivamente.

2. A través del botón (_About_), se accede a una sub-página que tendrá una breve descripción general del servicio que ofrece Cryptocode a sus usuarios.
3. a través del botón (_Contact_), se accede a una sub-página que tendra toda la información a disposición de las redes sociales de Cryptocode, para un acceso más fácil y rápido.



## 5. Tecnología
El proyecto es creado con:
 * HTML5
 * CSS
 * Javascript
 * NodeJS

## 6. Objetivos planteados

- CSS:
   * Uso de selectores de CSS.
   * Posiciones.
- Profundizar sobre el DOM.
- Javascript:
  * Crear y llamar funciones correctamente.
  * Uso del bucle for
  * Diferenciar correctamente cuando es const & let

  ## 7. Enlace web
  //gh-pages 


***
<details>
# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Criterios de aceptación adicionales](#4-criterios-de-aceptación-adicionales)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Recomendaciones generales](#6-recomendaciones-generales)
* [7. Recursos y temas relacionados](#7-recursos-y-temas-relacionados)
* [8. Checklist](#8-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones en el alfabeto:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos, el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

**¿Qué tengo que hacer exactamente?** En este proyecto crearás una aplicación
_web_ que servirá para que tus usuarias puedan cifrar y descifrar un texto
indicando un desplazamiento específico de caracteres (_offset_). Por ejemplo,
cifrar **MICASA** con un desplazamiento de 3 caracteres de manera que el mensaje
cifrado sería **PLFDVD**

La temática es libre. Piensa en qué situaciones de la vida real se
necesitaría cifrar un mensaje y piensa en cómo debe ser esa experiencia de uso
(qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de
ejemplo:

* Crear claves seguras.
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

El equipo de _coaches_ te dará un tiempo referencial para trabajar en este
proyecto. También indicaciones sobre si trabajar individualmente o en dupla.
Recuerda que cada quien aprende a un tirmo diferente, tiene más o menos tiempo
adicional al _bootcamp_ disponible, experiencia previa distina, etc.

## 3. Criterios de aceptación mínimos del proyecto
Cuando hablemos de "criterios de aceptación", nos referimos a todo aquello que
debe suceder con tu proyecto para que consideremos (tú y nosotras) que lo has
"hecho" y que lo podemos "aceptar" como "mínimamente terminado".

### 3.1 Alfabeto simplificado
Considera solamente letras mayúsculas, sin ñ ni números u otros caracteres:
* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### 3.2 Interfaz de usuario. Lo que se ve en el navegador (UI del inglés _user interface_)

Para cifrar debe permitir a tu usuaria:
* Escribir el mensaje (texto) que quiere cifrar.
* Elegir un desplazamiento (_offset_) indicando cuántas posiciones quiere que
  el cifrado desplace **cada letra** del mensaje.
* Ver el resultado del mensaje cifrado.

Para descifrar debe permitir a tu usuaria:
* Escribir el mensaje (texto) que quiere descifrar.
* Indicar el desplazamiento (_offset_) que se utilizó para cifrar el mensaje.
* Ver el resultado del mensaje descifrado.

### 3.3 Repositorio del código (GitHub) y publicación de la web (GitHub Pages)
Cuando termines, y antes de ir a la sesión de _Project Feedback_, tu código deberá
estar subido a GitHub (_commit/push_) y la interfaz será desplegada (publicada)
usando _GitHub pages_. Si no sabes lo que es GitHub, no te preocupes, lo
aprenderás durante este proyecto.

### 3.4 Sobre la definición de tu producto
En **tu README.md**, cuéntanos cómo pensaste en las usuarias y cuál fue tu proceso
para definir el producto final.

* Quiénes son las principales usuarias del producto.
* Cuáles son los objetivos que estas usuarias pueden conseguir al usar tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus necesidades.

### 3.5 Consideraciones técnicas
Toda esta sección puede resultarte muy abrumadora. Tómalo con calma, no es
necesario que lo comprendas todo antes de comenzar, irá teniendo sentido conforme
vas avanzando. Recuerda que el aprendizaje no es un proceso lineal.

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o _frameworks_, sólo JavaScript
puro también conocido como Vanilla JavaScript.

No debes utilizar la _pseudo-variable_ `this`.

#### 3.5.1 Sobre el _boilerplate_
Llamamos **_boilerplate_** a la estructura de archivos y a toda la configuración
de dependencias y _tests_ de ejemplo que ya existen en este repositorio y que te servirán como una "plantilla", como un punto de partida para trabajar.

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```
El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guía de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (_tests_) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el _parser_ que usar (qué version de JavaScript/ECMAScript), el
entorno (_browser_ en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí, usaremos las recomendaciones _por defecto_
de tanto `eslint` como `htmlhint`.

#### 3.5.2 Sobre los tests unitarios (pruebas)
El _boilerplate_ incluye _tests_ (pruebas) de ejemplo como punto de partida.

Los _tests_ unitarios (pruebas) deben cubrir un mínimo del 70% de _statements_,
_functions_ y _lines_, y un mínimo del 50% de _branches_.

El _boilerplate_ ya contiene el _setup_ y configuración necesaria para ejecutar
los _tests_ (pruebas) así como _code coverage_ para ver el nivel de cobertura de
los _tests_ usando el comando `npm test`.


#### 3.5.3 Sobre tus Scripts / Archivos
* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 4. Criterios de aceptación adicionales
Si te alcanza el tiempo y las ganas para explorar un poco más, intenta:

* Cifrar minúsculas, ñ, números, etc. El _boilerplate_ incluye algunos tests
(comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

* Permitir un _offset_ negativo.

## 5. Objetivos de aprendizaje

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

***

## 6. Recomendaciones generales

Pierde el miedo a preguntar a tus _coaches_ y a tus compañeras. Estás aquí
porque quieres aprender. Si ya supieras, estarías trabajando como _developer_
y no el _bootcamp_ de Laboratoria.

Hazte amiga de Trello. No solamente te ayudará a organizar tu trabajo, es
también una excelente manera de ir razonando sobre los pasos que seguirás,
en qué orden hacerlos, identificar qué necesitas aprender, etc.

Al prinncipio, Git y GitHub te resultarán misteriosos, no les temas y úsalos a
tu favor. Procura hacer _commits_ con frecuencia, eso te ayudará a tener un respaldo
en todo momento y podrás acceder a él siempre que lo necesites. ¡No lo dejes al final!

Anímate a correr los _tests_ cuanto antes para que te ayude a la construcción de
tus funciones.

### 6.1 Primeros pasos, tu prototipo en papel
Comienza por la ideación y el prototipado de tu proyecto. Dibuja en papel y lápiz
exactamente cada elemento que tendrá tu interfaz y prueba con algunas personas
para ver si se comprende, si es suficientemente intuitivo, etc.

Este paso es fundamental para que tú misma comprendas si tus ideas "funcionan"
fuera de tu cabeza. Te ayudará a entender mejor todo lo que tienes que hacer.
**No inviertas demasiado tiempo en esto. Con uns pocas horas debería ser más
que suficiente.**

A partir de acá puedes seguir por diferntes caminos. Es como armar un rompecabezas
o _puzzle_, puedes comenzar por una esquina, luego otra, un pedazo de un borde,
de otro, etc. Poco a poco te será más fácil ver "el todo" y entender cómo encajan
todas las partes.

Te sugerimos seguir por lo que menos sabes. Evita caer en el juego de
"la ilusión del avance". Quizás te sienteas "cómoda" trabajando en HTML y CSS
porque lo que haces se "ve" en el navegador y puede resultarte más fácil de comprender.
Si te quedas trabajando en eso tendrás la sensación de estar "avanzando", pregúntante
si estás "aprendiendo". No estás acá para "entregar proyectos", estás para aprender
lo que no sabes.

### 6.2 Achicando el gran problema en problemas más pequeños
Un "superpoder" que esperamos puedas desarrollar durante el _bootcamp_ es el de
definir "mini-proyectos" que te acerquen paso a paso a la solución del
"gran proyecto". Es el equvalente a comenzar armando esquinas o bordes del
rompecabezas/puzzle sin saber necesariamente cómo encajarán al final. Déjate
llevar y explora. Estas son algunas sugerencias:

#### "Mover" un valor de una caja de texto a otra
Crea una interfaz simple con 2 cajas de texto y un botón. Si escribo algo en la
caja de texto 1 y le doy click al botón, quiero que lo que escribí se "mueva"
desde la caja 1 hacia la caja 2.

Para lograr esto tendrás que aprender a: detectar un evento en el navegador (_click_), identificar un elemento de tu interfaz para obtener su contenido/valor (la caja de texto 1), "escribir" un valor en otro elemento de la interfaz (caja de texto 2).

#### "Convertir" una letra en su código ASCII
Pensando en la misma interfaz anterior (2 cajas de texto y 1 botón). Quiero
escribir A o B (una sola) en la caja de texto 1 y que cuando le dé _click_ al botón,
aparezca el código ASCII de la letra en la caja de texto 2.

Ahora no solamente estás "leyendo" y "escribiendo" valores en el navegador, también
tendrás que "manipularlos" antes de "escribirlos".

#### "Cifrar" A o B con un desplazamiento (_offset_) de 3
Cuando escriba A o B en la caja de texto 1 y le dé click al botón, quiero que
apaezca la letra cifrada en la caja de texto 2. Por ejemplo, si escribo B
debe aparecer E.

#### "Cifrar" una letra con un desplazamiento de 30 caracteres
En los casos anteriores probamos con letras y con un desplazamiento que no
implicaban llegar "más allá" de final del alfabeto. Ahora prueba con un caso que
sí lo requiera. Por ejmplo 30 caracteres de desplazamiento. Para esto te puede
ayudar el video de la sección "Recursos y temas relacionados". **La fórmula no es
lo importante en este proyecto, lo importante es lo que haces con la fórmula.**

#### "Cifrar" tres letras con un desplazamiento cuqlquiera
Hasta ahora hemos explorado trabajar con una sola letra pero ¿cómo haríamos si
son más? Para hacerlo tendrás que aprender cómo ir cifrando letra por letra y
ya estás mucho más cerca de resolver el proyecto "grande"

Fíjate que la complejidad es creciente, la clave está en definir el primer paso
lo más simple y pequeño que puedas. Luego tú misma puedes ir agregando complejidad
a medida que avanzas.

### 5.3 Tu caja de arena para "jugar"
Así como existen las cajas de arena para que las niñas jueguen en un espacio
seguro y controlado", tú también puedes procurarte condiciones "controladas" en
las que puedas identificar lo que te falla. Si comienzas explorando y probando
en archivos con muchas líenas de código y muchas cosas sucediento al mismo tiempo,
será difícil que sepas qué falla y/o por qué no te funciona algo que acabas de
leer y estás segura en entender. Esto puede ser muy frustrante y hacerte perder
mucho tiempo.

Para probar los mini-proyectos que te proponnemos, puedes hacerlo en un
proyecto/archivos en blanco en los que tú tienes el control y sabes exactamente
qué es y qué hace cada cosa. También puedes utilizar CodePen o Replit (por ejemplo).

### 6.4 Herramientas y configuración de tu PC

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](../../topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](../../topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Tú o una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repositorio de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.

## 7. Recursos y temas relacionados

### 7.1 fórmula matemática del Cifrado César y un par de cosas más
A continuación un video de Michelle ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

### 7.2 Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

### 7.3 Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

### 7.4 Temas relacionados
#### Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

#### Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

#### Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.

## 8. Checklist
<details>
  <summary>!Click para expandir¡</summary>

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Criterios de aceptación mínimos

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica quiénes son las usuarias y su relación con
  el producto.
* [ ] `README.md` explica cómo el producto soluciona los problemas/necesidades
de las usuarias.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Criterios de aceptación adicionales (opcionales)

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.

</details>
</details>