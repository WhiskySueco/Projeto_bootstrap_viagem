// alert("Funcionando ?")
let tabela = document.querySelector("#tabela")

// async é uma forma que o JS tem de transformar uma função sincrona em assicrona muito utilizada em APIs
async function carregarDados (){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url) // fetch irá fazer uma busca na url passada como parâmetro

    const dados = await resultado.json() // estamos convertendo todos os dados que estão vindo da api no formato json

    console.log (dados)

    for (const item of dados) {
        //console.log(item.email)
        
        // CRIADO ELEMENTOS HTML
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTrabalho = document.createElement("td")
        const tdFone = document.createElement("td")

        // CRIANDO CONTEUDO NAS COLUNAS
        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdFone.textContent = item.phone
        tdTrabalho.textContent = item.company.bs

        // ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdTrabalho)
        linha.appendChild(tdFone)

        tabela.appendChild(linha)

    }
}

carregarDados()