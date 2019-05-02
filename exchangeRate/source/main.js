function exchangeRate(currency){
  if(currency === "USD")
    return 19.03;
  if(currency==="EUR")
    return 21.17;
  if(currency==="USDEUR")
    return 0.89;  
  return 1;
}

function getinputElement(id){
  return document.getElementById(id);
}


function USDtoMXN(element) {
  var mxnElement = getinputElement("inputMXN");
  var result = element.value * exchangeRate("USD");
  mxnElement.value = result;
}

function USDtoEUR(element) {
  var mxnElement = getinputElement("inputEUR");
  var result = element.value * exchangeRate("USDEUR");
  mxnElement.value = result;
}


function toUSD(element) {
  var usdElement = getinputElement("inputUSD");
  var result = element.value / exchangeRate("USD");
  usdElement.value = result;
}

function toEUR(element){
  var eurElement = getinputElement("inputEUR");
  var result = element.value / exchangeRate("EUR");
  eurElement.value = result;
}

function EURtoMXN(element){
  var eurElement = getinputElement("inputMXN");
  var result = element.value * exchangeRate("EUR");
  eurElement.value = result;
}

function EURtoUSD(element) {
  var mxnElement = getinputElement("inputUSD");
  var result = element.value / exchangeRate("USDEUR");
  mxnElement.value = result;
}

function exchanges(node){
  if(node.id === "inputMXN"){
    toUSD(node);
    toEUR(node);
  }else if( node.id === "inputUSD"){
    USDtoMXN(node);
    USDtoEUR(node);
  }else {
    EURtoMXN(node);
    EURtoUSD(node);
  }
}

function addEvents() {
  var elementList = document.querySelectorAll('input')
  elementList.forEach(function(node) {
    node.addEventListener('input', function() {
      console.log(node.value);
      exchanges(node)
    })
  })
}


addEvents();
