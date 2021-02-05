let npcModel = {
    name: "",
    age: "",
    race: "",
    profession: "",
    class: "",
    information: "",
}

const barAttendant = {
    name: "Alan",
    status: "Doente",
    age: "50 anos",
    race: "Human",
    profession: "Bar attendant",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
}

const bard = {
    name: "Jonathan",
    status: "Vivo",
    age: "20 anos",
    race: "Human",
    profession: "Instrumentista",
    class: "Bardo",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
    
}


const fighter = {
    name: "Guilin",
    status: "Vivo",
    age: "50 anos",
    race: "Dwarf",
    profession: "Blacksmith",
    class: "Fighter",
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo."
}

function elementList(element,option){
    let elementList = document.getElementById(element);
    elementList.style.display = option;
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


function character1(){

    imageImport("https://i.pinimg.com/originals/43/5d/00/435d004a3d4c030d51864a6dc7e47512.jpg");

    buttons[0].style.display = "none";

    elementList("informClass","table-cell");
    elementList("className", "table-cell");

    document.getElementById("title").innerHTML = `${bard.name}`;

    document.getElementById("informStatus").innerHTML = `${bard.status}`;
    document.getElementById("informAge").innerHTML = `${bard.age}`;
    document.getElementById("informRace").innerHTML = `${bard.race}`;
    document.getElementById("informProfession").innerHTML = `${bard.profession}`;
    document.getElementById("informClass").innerHTML = `${bard.class}`;

    document.getElementById("paragraph01").innerHTML = `${bard.information}`;
 
    callonclick(function(){character2();}, buttons[1]);  //função callback com objetivo apenas de chamar outra função;

}

function character2(){
    
    buttons[0].style.display = "inline-block";
    
    elementList("informClass","none");
    elementList("className", "none");

    imageImport("https://media-waterdeep.cursecdn.com/attachments/thumbnails/6/550/300/374/tavern5.png");

    document.getElementById("title").innerHTML = `${barAttendant.name}`;

    document.getElementById("informStatus").innerHTML = `${barAttendant.status}`;
    document.getElementById("informAge").innerHTML = `${barAttendant.age}`;
    document.getElementById("informRace").innerHTML = `${barAttendant.race}`;
    document.getElementById("informProfession").innerHTML = `${barAttendant.profession}`;
   
    document.getElementById("paragraph01").innerHTML = `${barAttendant.information}`;
   

    callonclick(function(){character1();}, buttons[0]);
    callonclick(function(){character3();}, buttons[1]);
}

function character3(){
    
    elementList("informClass","table-cell");
    elementList("className", "table-cell");
 
    imageImport("https://i.pinimg.com/originals/38/88/ed/3888edde2b2de9ed7a09e6cee5986e78.jpg");
    
    document.getElementById("title").innerHTML = `${fighter.name}`;

    document.getElementById("informStatus").innerHTML = `${fighter.status}`;
    document.getElementById("informAge").innerHTML = `${fighter.age}`;
    document.getElementById("informRace").innerHTML = `${fighter.race}`;
    document.getElementById("informProfession").innerHTML = `${fighter.profession}`;
    document.getElementById("informClass").innerHTML = `${fighter.class}`;
    document.getElementById("paragraph01").innerHTML = `${fighter.information}`;
   

    callonclick(function(){character2();}, buttons[0]);
    callonclick(function(){character1();}, buttons[1]);


}



character1();




