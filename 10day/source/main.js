var nodeObj = {
    "tag": "div",
    "children": [
        {
            "tag": "ul",
            "grandchild":[
                        {"tag":"li"},
                        {"tag":"li"}
                        ]
        },
        {
            "tag": "ul",
            "grandchild":[
                        {"tag":"li"},
                        {"tag":"li"},
                        {"tag":"li"}
                        ]
        },
        {
            "tag": "ul",
            "grandchild":[
                        {"tag":"li"},
                        {"tag":"li"},
                        {"tag":"li"},
                        {"tag":"li"}
                        ]
        }                
    ]
  }
  

  var tableObj = {
    "tag":"table",
    "rows":[
            {"tag":"tr",
            "columns":[
                {"tag":"th"},
                {"tag":"th"},
                {"tag":"th"},
                {"tag":"th"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]},
            {"tag":"tr",
            "columns":[
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"},
                {"tag":"td"}
            ]}
        ]};

  console.log(tableObj);
  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag);
    if(child.tag==="td"){
        var textNode = document.createTextNode("HOLA");
        element.appendChild(textNode);
    }else if(child.tag==="th"){
        var textNode = document.createTextNode("TITLE");
        element.appendChild(textNode);
    }

    return element;
  }
  
  function buildStructure(tableObj) {
    var parentNode = createParent(tableObj.tag)
    tableObj.rows.forEach(function(row) {
        var rowNode = createChild(row);
        row.columns.forEach(function(column){
            var columnNode = createChild(column);
            rowNode.appendChild(columnNode);  
        });
        parentNode.appendChild(rowNode);
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(tableObj);
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init();

  
  
  /*
  console.log(nodeObj);

  
  function createParent(tag) {
    return document.createElement(tag)
  }
  
  function createChild(child) {
    var element = document.createElement(child.tag)
    return element
  }
  
  function buildStructure(nodeObj) {
    var parentNode = createParent(nodeObj.tag)
    nodeObj.children.forEach(function(child) {
        var childNode = createChild(child)
        child.grandchild.forEach(function(grandchild){
            var grandchildNode = createChild(grandchild);
            childNode.appendChild(grandchildNode);
        });
        parentNode.appendChild(childNode)
    })
    return parentNode
  }
  
  function init() {
    var structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init();

*/