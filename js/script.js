//alert("Olá mundo")
//console.log("Só quem é dev vai descobrir")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
}

nome.addEventListener("blur", exibirNome) //o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento "blur" que é quando o foco de um campo.


// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// }