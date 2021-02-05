const iceGigant = {
    name: "Oskorri",
    status: "Ativo",
    age: "40 anos",
    race: "Frost Giant",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
}


const redDragon = {
    name: "Cabeçudo",
    status: "Ativo",
    age: "500 anos",
    race: "Dragão",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
}


const greenDragon = {
    name: "Alan",
    status: "Ativo",
    age: "500 anos",
    race: "Dragão",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
}



/**
 * @param {number} qtn Quantidades de elementos a ser criados;
 * @param {HTMLElement} elements Tipo de elemento a ser criado;
 */
function createButtons(qtn, elements){
    let variavelAuxiliar = [];
    for (let i=0; i<qtn; i++){                           //loop para geraros butões;
        const element = document.createElement(elements);  //craindo a quantidade de botôes que preciso;
        variavelAuxiliar.push(element);
    }
    return variavelAuxiliar;
}

/**
 * 
 * @param {string} nameButton  Nome dos botões;
 * @param {} buttons Vem da função createButtons;
 */

function nameButton(nameButton, buttons){
  buttons.forEach(function(button, i) {    //Precisa vir de um array, por isso ao passar o nome precisa estar em [];
      const name = nameButton[i];
      button.textContent = name;
  });
}

/**
 * @description Função para inserir o botão no html
 * @param {HTMLElement} local
 * @param {HTMLElement[]} data
*/
function insertButtonHtml(local, data){
    data.forEach(function (value) {
        local.appendChild(value);
    });
}
/**
 * @description Função para dar funcionaliade ao botão
*/
function callonclick(callback, button){     //no paramentro callback entra a função que quer executar no botão.
    button.onclick = callback;
}

function imageImport(foto){
    document.getElementById("picture").src= foto;
}


const container = document.getElementById("buttons");
const buttons = createButtons(2, "button");

insertButtonHtml(container, buttons);
nameButton(["<<", ">>"], buttons);
//tomada de decisão


function introduction(){

    imageImport("https://media.istockphoto.com/illustrations/red-dragon-head-digital-painting-illustration-id1183916666?k=6&m=1183916666&s=170667a&w=0&h=r0j8_L08luju5A-2EbFsB6CUznw5m6nfkN-cIoUiwlk=");

    buttons[0].style.display = "none";

    

    document.getElementById("title").innerHTML = `${redDragon.name}`;

    document.getElementById("informStatus").innerHTML = `${redDragon.status}`;
    document.getElementById("informAge").innerHTML = `${redDragon.age}`;
    document.getElementById("infomrRace").innerHTML = `${redDragon.race}`;

    document.getElementById("paragraph01").innerHTML = `${redDragon.information}`;
 
    callonclick(function(){chapter2();}, buttons[1]);  //função callback com objetivo apenas de chamar outra função;

}

function chapter2(){
    
    buttons[0].style.display = "inline-block";

    imageImport("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb9da4b6-117d-4be0-ad56-7cd5d4d8c244/d1gs6ur-a0fa9e91-bee0-4913-8edb-054088aac8d4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmI5ZGE0YjYtMTE3ZC00YmUwLWFkNTYtN2NkNWQ0ZDhjMjQ0XC9kMWdzNnVyLWEwZmE5ZTkxLWJlZTAtNDkxMy04ZWRiLTA1NDA4OGFhYzhkNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DCna7S9wx1BzDLTFRSUlyuLJ4niRgLfQTUukdpQpYa0");

    document.getElementById("title").innerHTML = `${greenDragon.name}`;

    document.getElementById("informStatus").innerHTML = `${greenDragon.status}`;
    document.getElementById("informAge").innerHTML = `${greenDragon.age}`;
    document.getElementById("infomrRace").innerHTML = `${greenDragon.race}`;   

    document.getElementById("paragraph01").innerHTML = `${greenDragon.information}`;
   

    callonclick(function(){introduction();}, buttons[0]);
    callonclick(function(){chapter3();}, buttons[1]);
}

function chapter3(){
    
    imageImport("https://i.pinimg.com/originals/cd/0e/62/cd0e62f8ff513dc463c2652987fb79ce.png");
    
    document.getElementById("title").innerHTML = `${iceGigant.name}`;

    document.getElementById("informStatus").innerHTML = `${iceGigant.status}`;
    document.getElementById("informAge").innerHTML = `${iceGigant.age}`;
    document.getElementById("infomrRace").innerHTML = `${iceGigant.race}`;

    document.getElementById("paragraph01").innerHTML = `${iceGigant.information}`;
   

    callonclick(function(){chapter2();}, buttons[0]);
    callonclick(function(){introduction();}, buttons[1]);


}




introduction();