//alert("Olá mundo")
//console.log("Só quem é dev vai descobrir")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if (nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome) //o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento "blur" que é quando o foco de um campo.


// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// }

let idade = document.querySelector("#idade")

idade.addEventListener("blur",function(){
    if(idade.value >= 18){
        alert("Você possui 18 anos ou mais")
    }
    else {
        alert ("Você não possui idade o suficiente para continuar com o cadastro")
        window.location.href = "https://www.youtube.com/watch?v=mQYs4HnFdEk"
    }
})

let endereco = document.querySelector("input[name=end]")
endereco.addEventListener("blur", function(){
    console.log (endereco.value.length)
    if (endereco.value.length >= 35){
        alert("A quantidade de caracteres do endereço está muito grande")
        endereco.style.border = "2px solid red"
    }
    else {
        alert("o endereço está ok")
        endereco.style.border = "2px solid yellow"
    }
})

let email = document.querySelector("input[name=email]")
let confirmar = document.querySelector("input[name=confirmar")

let minusculo = email.value.toLowerCase() // Tornando o conteudo do email minúsculo

email.addEventListener("keyup", function(){
    confirmar.value = email.value
    
    if (minusculo.indexOf("@") == -1 ) {

    }
    else {

    }
    console.log (email.value.indexOf("@"))
})