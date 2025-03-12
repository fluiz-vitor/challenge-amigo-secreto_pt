//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("O campo nome precisa ser preenchido!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já está na lista!");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("button-delete");
        botaoExcluir.innerHTML = `<img src='assets/trash.png' alt='Excluir' class='icon-trash'>`;
        botaoExcluir.onclick = () => removerAmigo(index);

        li.appendChild(botaoExcluir);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
