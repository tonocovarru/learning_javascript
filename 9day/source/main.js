//document.write("Hello Word!!!!!");
//document.getElementsByTagName("body");

/*document.getElementsByClassName("even");
document.getElementsByTagName("body");

document.querySelectorAll("div")

document.querySelectorAll(".even")

document.querySelectorAll("#container")

//para acceder a los hijos de las cosas
document.querySelectorAll("div>ul")


document.querySelectorAll("#container .even")

document.querySelectorAll("div>ul>li")

document.querySelectorAll("div .even")
//podemos modifcar sus atributos y estilos
document.querySelectorAll("li")[3]


document.getElementsByClassName("claseContainer")[0].style.backgroundColor="peru";

document.getElementsByClassName("claseContainer")[0].style.backgroundColor;
*/

/*
var lis= document.getElementsByTagName("li");

for(li of lis){
    console.log(li);
    li.style.borderStyle = "groove";
}

// Creación de Nodos. a una variable . Recibe como parametro el TAG a crear. El string de las
// etiquetas a crear
var node_div = document.createElement("div");
// solo se creo, aun no esta en el DOM
// como podemos hacer para ingresar texto
var h1 = document.createElement("h1")
var texto = document.createTextNode("Create Word");

// ingresar un nodo dentro de otro, siempre en la posición final
h1.appendChild(texto);


// se agrega al dom, al body
document.getElementsByTagName("body")[0].appendChild(h1);

// como creamos un id al nodo creado
h1.id = "header";
*/

var nodeObj = {
    'tag':'div',
    'child':[
        {
            'tag':'h2',
            'text':'hello word 2'
        },
        {
            'tag':'h3',
            'text':'hello word 3'
        }
    ]
};



var div_one = document.createElement(nodeObj.tag);
for(child of nodeObj.child){
    div_one.appendChild(createChild(child));
}

document.getElementsByTagName("body")[0].appendChild(div_one);

function createChild(child){
    var node_header = document.createElement(child.tag);
    var node_text = document.createTextNode(child.text);
    node_header.appendChild(node_text);
    return node_header;
}

//console.log(childs);


//document.getElementsByTagName("body")[0].appendChild(nodeObj.tag);

