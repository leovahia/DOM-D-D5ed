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

    imageImport("https://i.pinimg.com/originals/67/2a/af/672aaf6ab312f81090caff983087ba42.jpg");

    buttons[0].style.display = "none";

    document.getElementById("title").innerHTML = "Inicio da História";

    document.getElementById("paragraph01").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo.";
    document.getElementById("paragraph02").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo.";
    document.getElementById("paragraph03").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo.";

    callonclick(function(){chapter2();}, buttons[1]);  //função callback com objetivo apenas de chamar outra função;

}

function chapter2(){
    
    buttons[0].style.display = "inline-block";

    imageImport("https://i.pinimg.com/originals/a9/75/e4/a975e4cd67aa7371fc4c532975f79c54.jpg");

    document.getElementById("title").innerHTML = "Capitulo 2";

    document.getElementById("paragraph01").innerHTML = "Primeiro parágrafo........";
    document.getElementById("paragraph02").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo.";
    document.getElementById("paragraph03").innerHTML = "Terceiro parágrafo........";

    callonclick(function(){introduction();}, buttons[0]);
    callonclick(function(){chapter3();}, buttons[1]);
}

function chapter3(){
    
    imageImport("https://i.pinimg.com/originals/5b/a0/8d/5ba08db88ce20423860b918cdea3e3a8.jpg");
    
    document.getElementById("title").innerHTML = "Capitulo 3";

    document.getElementById("paragraph01").innerHTML = "Primeiro parágrafo........";
    document.getElementById("paragraph02").innerHTML = "Segundo parágrafo.......";
    document.getElementById("paragraph03").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget enim porttitor felis fermentum facilisis. Maecenas cursus risus nec mattis porttitor. Integer nisl quam, dignissim rutrum quam non, scelerisque volutpat dolor. Proin eu faucibus massa. Fusce pulvinar, dui sit amet accumsan commodo, velit est aliquet nisl, vitae sagittis massa neque nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas condimentum ornare enim non porttitor. Pellentesque quis lectus gravida, suscipit enim varius, tincidunt erat. Quisque nec ante eu justo dictum accumsan. Morbi placerat velit justo.";

    callonclick(function(){chapter2();}, buttons[0]);
    callonclick(function(){chapter2();}, buttons[1]);


}




introduction();