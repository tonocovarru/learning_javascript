
var vendingMachineObj = {
    "columns":4,
    "rows":6,
    "stockCapacity":10,
    "stock":[{
      "id":"11",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":1},
      {
      "id":"12",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":2},
      {
      "id":"13",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":1},
      {
      "id":"14",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":1},
      {
      "id":"21",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":2},
      {
      "id":"22",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":2,
      "row":2}, 
      {
      "id":"23",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":3,
      "row":2}, 
      {
      "id":"24",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":4,
      "row":2}, 
      {
      "id":"31",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":3},
      {
      "id":"32",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":2,
      "row":3}, 
      {
      "id":"33",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":3,
      "row":3},
      {
      "id":"34",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":4,
      "row":3},
      {
      "id":"41",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":4},
      {
      "id":"42",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":2,
      "row":4}, 
      {
      "id":"43",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":3,
      "row":4},
      {
      "id":"44",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":4,
      "row":4},
      {
      "id":"51",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":1,
      "row":5},
      {
      "id":"52",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":2,
      "row":5}, 
      {
      "id":"53",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":3,
      "row":5},
      {
      "id":"54",
      "precio":20,
      "existencia":10,
      "nombre":"papas",
      "imagen":"img/papas.jpg",
      "column":4,
      "row":5},
      {
        "id":"61",
        "precio":20,
        "existencia":10,
        "nombre":"papas",
        "imagen":"img/papas.jpg",
        "column":1,
        "row":6},
        {
        "id":"62",
        "precio":20,
        "existencia":10,
        "nombre":"papas",
        "imagen":"img/papas.jpg",
        "column":2,
        "row":6}, 
        {
        "id":"63",
        "precio":20,
        "existencia":10,
        "nombre":"papas",
        "imagen":"img/papas.jpg",
        "column":3,
        "row":6},
        {
        "id":"64",
        "precio":20,
        "existencia":10,
        "nombre":"papas",
        "imagen":"img/papas.jpg",
        "column":4,
        "row":6},          
    ]
};


function comprar(){
  console.log("AQUI");
  var idSolicitado = document.getElementById("idProductoSolicitado").value;
  var importe = document.getElementById("importePagado").value;
  console.log(idSolicitado,importe);
  console.log(comprarProducto(idSolicitado,importe));
}


function comprarProducto(id_solicitado,importe){
  console.log(id_solicitado,importe);
  var existeProducto = vendingMachineObj.stock.find(function(elemento){
      return elemento.id == id_solicitado;
  });  

  if (!existeProducto) {
    return "El id " + id_solicitado + " no existe";
  }

  if (!existeProducto.existencia) {
    return "No existe producto disponible"
  }

  if(existeProducto.precio<=importe){
    existeProducto.existencia--;
    var elementNode = document.getElementById("existencia-" + existeProducto.id);
    if(elementNode){
      elementNode.innerHTML= existeProducto.existencia;
    }
    return "El cambio devuelto sera: " + (importe - existeProducto.precio);
  }
  return "El precio es mayor al importe ingresado";
}



function createItem(item){
var htmlItem = '<div class="col-3"><aritcle class="item-article"><img class="img-thumbnail" src="' + item.imagen + '" alt="">';
htmlItem += '<div class="badge badge-success" id="existencia-' + item.id + '" style="width: 3rem;">' + item.existencia + '</div>';
htmlItem += '<div class="badge badge-primary" style="width: 6rem;">' + item.id + '</div>';
htmlItem += '<div class="badge badge-primary" style="width: 6rem;">' + item.precio + '</div>'
htmlItem += '</article></div>';

return htmlItem;
}

function createStocks(){
  var n = 0;
  var divNode = document.getElementsByClassName("vending_machine")[0];

  for(var i = 0; i<vendingMachineObj.rows;i++){
     var rowNode = document.createElement("div");
     rowNode.className = "row";
     rowNode.innerHTML = "";
     for(var j=0;j<vendingMachineObj.columns;j++){
       var colNode = createItem(vendingMachineObj.stock[n]);
       rowNode.innerHTML += colNode;
       n++;
     }
     divNode.appendChild(rowNode);
  }
}

createStocks();

/*
  function createObj(tag,description) {
    var element = document.createElement(tag);
    if(description!=""){
        var elemenText = document.createTextNode(description);
        element.appendChild(elemenText);
    }
    return element;
  }

  function createChild(koder) {
    var divElement = createObj("div","");
    divElement.setAttribute("id", koder.id);
    divElement.setAttribute("class", "koders");
    var nameElement = createObj("p",koder.name);
    nameElement.id = "name";
    var ageElement = createObj("p",koder.age);
    ageElement.id = "age";
    var genderElement = createObj("p",koder.gender);
    genderElement.id = "gender";
    divElement.appendChild(nameElement);
    divElement.appendChild(ageElement);
    divElement.appendChild(genderElement);
    return divElement;
  }
  
  function buildStructure(kodemiaObj) {
    var divElement = createObj("div","");
    divElement.setAttribute("class", "koders_wrapper");
    kodemiaObj.koders.forEach(function(koder){
        var koderElement = createChild(koder);
        divElement.appendChild(koderElement);
    });
    return divElement
  }
  
  function init() {
    var structureNode = buildStructure(kodemiaObj);
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  function deleteKoder(koderID){
    var parent = document.querySelectorAll(".koders_wrapper")[0];
    var node = document.querySelectorAll("#" + koderID)[0];
    console.log(node);
    parent.removeChild(node);
  }

  function editKoder(koder){
    var nodes = document.querySelectorAll("#" +koder.id)[0];
    console.log(nodes.childNodes);
    nodes.childNodes.forEach(function(node){
        //console.log(node.id);
        if(node.id === "name"){
            node.innerHTML = koder.name;
        } else if (node.id === "age"){
            node.innerHTML = koder.age;
        } else {
            node.innerHTML = koder.gender;
        }
    });
    //parent.removeChild(node);
  }


  function addKoder(koder){
    kodemiaObj.koders.push(koder);  
    var parent = document.querySelectorAll(".koders_wrapper")[0];
    var koderElement = createChild(koder);
    parent.appendChild(koderElement);
  }
 
  init();
*/