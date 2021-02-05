
function elementcreate(element){
    const elementButton = document.createElement(element);
    return elementButton;
}

function nameElement(element, name){
    element.textContent = name;
}

function localHtml(element, container){
    container.appendChild(element);
}

const button = elementcreate("button");
const container = document.getElementById("statusButton");

localHtml(button,container);
nameElement(button, "teste");

function changeStatus(){
    
}

