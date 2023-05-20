// a. Mostrar el Número de Artículos que existen en el Documento.
var numeroArticulos = document.getElementsByTagName('h3').length;
console.log('Número de artículos: ' + numeroArticulos);

// b. Identificar líneas divisorias dentro del Documento y número de líneas.
var lineasDivisorias = document.getElementsByTagName('hr').length;
console.log('Número de líneas divisorias: ' + lineasDivisorias);

// c. Identificar los elementos de lista dentro del Documento y número de elementos en total.
var elementosLista = document.getElementsByTagName('li');
var numeroElementosLista = elementosLista.length;
console.log('Número de elementos de lista: ' + numeroElementosLista);

// d. Identificar elementos de la "Lista Elementos", número de elementos y código del enlace dentro de dicha lista.
var listaElementos = document.getElementById('elemen');
var elementosListaElementos = listaElementos.getElementsByTagName('li');
var numeroElementosListaElementos = elementosListaElementos.length;
console.log('Número de elementos de la lista "Lista Elementos": ' + numeroElementosListaElementos);

var enlaceListaElementos = listaElementos.getElementsByTagName('a')[0];
var codigoEnlaceListaElementos = enlaceListaElementos.getAttribute('href');
console.log('Código del enlace dentro de la lista "Lista Elementos": ' + codigoEnlaceListaElementos);

// e. Identificar elementos de la lista "Menú", identificar enlaces y número de enlaces en dicha lista.
var listaMenu = document.getElementById('menu');
var enlacesMenu = listaMenu.getElementsByTagName('a');
var numeroEnlacesMenu = enlacesMenu.length;
console.log('Número de enlaces en la lista "Menú": ' + numeroEnlacesMenu);

// f. Identificar imágenes dentro del Documento y número de imágenes en total.
var imagenes = document.getElementsByTagName('img');
var numeroImagenes = imagenes.length;
console.log('Número de imágenes en el documento: ' + numeroImagenes);

// g. Identificar imágenes del bloque referente al "Artículo 2", identificar primera imagen y número total de imágenes dentro de este bloque.
var imagenesArticulo2 = document.querySelector('.imgAr2').nextElementSibling.getElementsByTagName('img');
var primeraImagenArticulo2 = imagenesArticulo2[0];
var numeroImagenesArticulo2 = document.querySelectorAll('.imgAr2').length;
console.log('Número de imágenes en el bloque "Artículo 2": ' + numeroImagenesArticulo2);
console.log('Código de la primera imagen del bloque "Artículo 2": ' + primeraImagenArticulo2.getAttribute('src'));

// h. Identificar imágenes del bloque referente al "Artículo 3", número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
var imagenesArticulo3 = document.getElementById('imgAr3').getElementsByTagName('img');
var numeroImagenesArticulo3 = imagenesArticulo3.length;
console.log('Número de imágenes en el bloque "Artículo 3": ' + numeroImagenesArticulo3);

var segundaImagenArticulo3 = imagenesArticulo3[1];
var codigoSegundaImagenArticulo3 = segundaImagenArticulo3.getAttribute('src');
console.log('Código de la segunda imagen del bloque "Artículo 3": ' + codigoSegundaImagenArticulo3);

var cuartaImagenArticulo3 = imagenesArticulo3[3];
var codigoCuartaImagenArticulo3 = cuartaImagenArticulo3.getAttribute('src');
console.log('Código de la cuarta imagen del bloque "Artículo 3": ' + codigoCuartaImagenArticulo3);

// i. Identificar enlaces del Documento y número de enlaces en total.
var enlaces = document.getElementsByTagName('a');
var numeroEnlaces = enlaces.length;
console.log('Número de enlaces en el documento: ' + numeroEnlaces);

// j. Identificar enlaces distribuidos dentro del párrafo referente al "Artículo 1" y número de enlaces.
var enlacesArticulo1 = document.getElementById('text1').getElementsByTagName('a');
var numeroEnlacesArticulo1 = enlacesArticulo1.length;
console.log('Número de enlaces en el párrafo del "Artículo 1": ' + numeroEnlacesArticulo1);