var kodemiaObj = {
    "koders":[
        {
        "id":"koder01",    
        "name":"David",
        "age":"22",
        "gender":"H"
        },
        {
        "id":"koder02",    
        "name":"Ale",
        "age":"25",
        "gender":"M"
        },
        {
        "id":"koder03",
        "name":"Carlos",
        "age":"28",
        "gender":"H"
        }        
    ]
  }
    
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

  