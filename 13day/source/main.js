var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "ul",
            "grandchild":[
                        {"tag":"li","text":"Opción 1"},
                        {"tag":"li","text":"Opción 2"},
                        {"tag":"li","text":"Opción 3"},
                        {"tag":"li","text":"Opción 4"},
                        {"tag":"li","text":"Opción 5"}
                        ]
        }
    ]
  }
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child,text) {
    var element     = document.createElement(child);
    if(text){
        var elementText = document.createTextNode(text);
        element.appendChild(elementText);
    } 
    return element;
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child.tag,"")
        childNode.id = "principal";
        child.grandchild.forEach(function(grandchild){
            var grandchildNode = createChild(grandchild.tag,grandchild.text);
            childNode.appendChild(grandchildNode);
            grandchildNode.addEventListener("click", cambiaColor);
        });
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  

  function cambiaColor(event){
    var list = document.querySelectorAll("li");
    for(i=0; i<list.length; i++)
        list[i].classList.remove("seleccione");
    event.target.classList.toggle("seleccione");
  }

  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  // Cuando la pagina ya este cargada, se ejecutará la función
  window.onload = function (){
    init();

  }