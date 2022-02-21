/* 
Case Sensitive = reconhe letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClasseName()
por Seletor especifico: querySelector()
por Seletor todos: querySelectorAll()
*/

let nome = window.document.getElementById("nome"); // nao usa o #, usado em ID 
let email = document.querySelector('#email'); // tem que se usar o # senao da errado
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let contador = document.querySelector("#contador")

let mapa = document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    txtNome.innerHTML = "ola mundo"

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido! - É preciso um @ e um ."
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    contador.innerHTML = `${assunto.value.length} / 100`

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Máximo 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        // txtAssunto.innerHTML = "Obrigado pelo assunto"    
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente, por favor.")
    }
}

function mapaZoom() {
    mapa.style.width = "65vw"
    mapa.style.heigth = "450px"
}

function mapaNormal() {
    mapa.style.width = "600px"
    mapa.style.heigth = "450px"
}