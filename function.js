let qtde = 0;
let controll = false;
var preco_total = 0;

function close_controll() {
    if (controll === false) {
        document.getElementById("campo").style.display = "flex";
        controll = !controll;
    } else if (controll) {
        controll = !controll
        document.getElementById("campo").style.display = "none";
    }
}

class Game {

    constructor(id, name, price) {
        this.id = id;
        this.nome = name;
        this.preco = price;
    }
}

function cadastrarEmail(){
    let email = document.getElementById('form-email').value;
  
    let convertData = JSON.stringify(email);
    localStorage.setItem(`E-mail`, convertData);

    //console.log(convertData);
    alert("E-mail cadastrado com sucesso!!");

}

var total_games = [];

function fJogo(id, nome, valor) {
    let livro = new Game(id, nome, valor)
    total_games.push(livro);
    qtde += 1;
    //console.log('Valor atual:' + qtde);
    document.getElementById("number").innerText = qtde;
    console.log(total_games);
}

function totalPrice() {
    preco_total = 0;

    for (let valor = 0; valor < total_games.length; valor++) {
        preco_total += total_games[valor].preco;
        
    }

    document.getElementById("preco_total").innerText = "Valor: " + preco_total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}


function finalizarPedido() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let data = {
        cliente: {
            nome,
            telefone
        },
        itens_adquiridos: total_games
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem(`Compra${localStorage.length + 1}`, convertData);
    alert("Pedido finalizado com sucesso!!");
    qtde = 0;
    document.getElementById("number").innerText = qtde;
 
}


function pedido() {
    document.getElementById('qtde_itens_form').innerText = "Quantidade de itens: " + qtde + " ";
    close_controll()
}

function endCadastro() {
    alert("Cadastro incluído com sucesso!");
}