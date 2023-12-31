//alert("Olá mundo")
//console.log("Só quem é dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur",exibirNome)// o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento 'blur', que é quando o foco sai de um campo

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })

let idade = document.querySelector("#idade")

idade.addEventListener("blur",function(){
    if(idade.value >= 18){
        alert("Você possui 18 anos ou mais!")
    }
    else{
        alert("Infelizmente você não é de maior!")
        // Essa função irá redirecionar o usuário para um link específico
        window.location.href = "https://img.freepik.com/vetores-gratis/criancas-de-volta-a-escola_52683-42033.jpg"
    }
})

let endereco = document.querySelector("input[name=end]")
endereco.addEventListener("blur",function(){
    console.log(endereco.value.length)

    if(endereco.value.length != ""){
        if(endereco.value.length >= 35){
            alert("Endereço muito grande")
            endereco.style.border = "2px solid red"
        }
        else{
            alert("Tudo certo com o endereco!")
            endereco.style.border = "2px solid yellow"
        }
    }

    
    
})

let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")

email.addEventListener("keyup",function(){
    let minusculo = email.value.toLowerCase()//Tornando o conteúdo do email minúsculo
    
    confirmacao.value = email.value

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com')==-1){
        console.log("Email inválido")
        //email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")

    }
    else{
        console.log("Email válido")
        //email.style.border = "2px solid green"
        email.classList.add("border-success")
        email.classList.remove("border-danger")

    }

    
    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

// ()=>{} isto é uma arrow function, ou seja, uma versão resumida da função anônima
btn_olho.addEventListener("click",()=>{
    if(btn_olho.classList.contains("fa-eye")){
        //console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    }
    else{
        //console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})

// PEGANDO DADOS DO CAMPO RADIO
let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click",(evento)=>{
    //console.log(evento)
    evento.preventDefault()// Esta função irá impedir o comportamento padrão do botão

    //console.log(escolaridade[2])
    for(let itens of escolaridade){
        //console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é ${itens.value}`)// isto é um template string, outra forma de concatenar.
            //alert("Sua escolaridade é "+itens.value)
            //let opcao = confirm("Tem certeza?")
            //console.log(opcao)
        }
    }

})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")

escolha.addEventListener("change", ()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
    }
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change",()=>{
    if(concordo.checked){
        alert("Obrigado pela escolha")
    }
    else{
        alert("Poxa, muito triste sua decisão")
        let mensagem = prompt("Diga porque você desmarcou")// cria uma caixa de texto
    }
})

let trabalho = document.querySelector(".form-select")
trabalho.addEventListener("change",()=>{
    //console.log(trabalho.options)

    for(let itens of trabalho){
        if(itens.selected){
            //console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.backgroundColor = "cyan"
                trabalho.style.color = "white"
            }
            if(itens.value == "Tecnologia"){
                trabalho.style.backgroundColor = "brown"
                trabalho.style.color = "white"
            }
            if(itens.value == "Financeiro"){
                trabalho.style.backgroundColor = "purple"
                trabalho.style.color = "white"
            }
        }

    }

})

let cor = document.querySelector("#cor")
cor.addEventListener("change", ()=>{
    console.log(cor.value)
    document.body.style.backgroundColor = cor.value
})

let mensagem = document.querySelector ("#mensagem")
let restante = document.querySelector("#restante")

let limite = 20
mensagem.addEventListener("keyup",()=>{
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    mensagem.setAttribute("maxLength",limite)
    console.log(restante.parentNode)

    if(restante.textContent == 20){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red" // ParentNode significa que estamos pegando o elemnto (nó da árvore DOM) pai.
    }
    else{
        mensagem.classList.remove ("border-danger")
        restante.parentNode.style.color = "black"
    }
})