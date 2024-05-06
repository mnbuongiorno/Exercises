//Document Object Model
//es el contenedor de todo. Se divide en nodos. Un nodo en el DOM es cualquier etiqueta del cuerpo,
//como un parrafo, el mismo body o incluso las etiquetas de una lista.

//Tipos de nodo.
//Document: es el nodo raiz a partir del cual derivan el resto de nodos.
//Element: nodos definidos por etiquetas html
//Text: el texto dentro de un nodo element se considera un nuevo nodo hijo del tipo text.
//Attribute: los atributos de las etiquetas definen nodos, (en JS no los veremos como nodos sino como informacion asociada al nodo de tipo element).
//Comentarios y otros: los comentarios y otros elementos como las declaraciones Doctype en cabecera de los documentos HTML generan nodos.

//

// Document - Metodos de seleccion de elementos

// getElementById() - Selecciona un elemento por ID.
// getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
// querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// Metodos para definir, obtener y eliminar valores de atributos.

// setAttribute() - Modifica el valor de un atributo. El primer parametro es lo que queremos modificar y el segundo parametro es el nuevo valor.
// getAttribute() - Obtiene el valor de un atributo.
// removeAttribute() - Remueve el valor de un atributo. 



// Global attributes - All HTML elements have these attributes

// class - lista de clases del elemento separadas por espacios.
// contenteditable - indica si el elemento puede ser modificable por el usuario (boolean).
// dir - indica la direccionalidad del texto.
// hidden - indica si el elemento aun no es o ya no es relevante. Oculta
// id - define un ID unico
// style - contiene declaraciones de estilo CSS para ser aplicadas al elemento.
// tabindex - indica si el elemento puede obtener un focus de input. focus como en el input.
// title - contiene un texto con infomacion relacionada al elemento al que pertenece.

//


const testTitle = document.querySelector(".title");

testTitle.setAttribute("contentEditable","true");


testTitle.setAttribute("dir", "ltr") //"rtl"

// Inputs attributes 

// className - devuelve el nombre de la clase
// value - devuelve el value
// type - cambia el type
// accept - acepta formatos
// form -  specifies the form to which the input belongs.
// minlength - minima cantidad de chars que debe tener el input
// placeholder - 
// required - 

const input = document.querySelector(".test-input");

// input.type = "color"

// input.accept = "image/png"

// input.style

