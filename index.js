let jogador = "Sidney";
let pontosDoJogador = 15;
let pontosGanhos = 5;

function perca() {
    console.log("Você ganhou +" + pontosGanhos);
    return pontosGanhos;
}

// Chama a função e soma os pontos
let totalPontos = pontosDoJogador + perca();
let nivel = pontosGanhos + pontosDoJogador;

// Define o nível com base na pontuação
if (totalPontos < 10) {
    nivel = "Ferro";
} else if (totalPontos < 20) {
    nivel = "Ouro";
} else if (totalPontos < 30) {
    nivel = "Diamante";
} else {
    nivel = "Lendário";
}

// Exibe o resultado
console.log(jogador + " ganhou " + pontosGanhos + " pontos" + " está no nível " + nivel);
