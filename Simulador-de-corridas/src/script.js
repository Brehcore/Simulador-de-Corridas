import { createInterface } from 'readline';

//Configurando a interface para capturar a entrada do usuário
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const players = [
{
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
},

{
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
},

{
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
},

{
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
},

{
    NOME: "Toad",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 5,
    PODER: 2,
    PONTOS: 0,
},

{
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
}
];

// Exibe a lista de jogadores e permite que o usuário escolha dois
function showPlayers() {
    console.log("Escolha seus personagens:");
    players.forEach((player, index) => {
        console.log(`${index + 1}: ${player.NOME}`);
    });
}

function choosePlayer(playerNumber) {
    return new Promise((resolve) => {
        rl.question(`Escolha o personagem ${playerNumber} (Digite o número correspondente): `, (answer) => {
            let playerIndex = parseInt(answer) - 1;

            if (isNaN(playerIndex) || playerIndex < 0 || playerIndex >= players.length) {
                console.log("Opção inválida, tente novamente.");
                return resolve(choosePlayer(playerNumber)); // Reexecuta se inválido
            }

            resolve(players[playerIndex]);
        });
    });
}

async function rollDice(){ //asyn para as funções executarem uma de cada vez
    return Math.floor(Math.random() * 6) + 1; //Math.floor para arredondar o valor em Math.ramdom | return pois outras funções também utilizarão essa mesma função
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch(true) {
        case random < 0.33:
            result = "RETA"
        break;
        case random < 0.66:
            result = "CURVA"
        break;
        default:
            result = "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 Rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round ++){
        console.log(`🏁 Rodada ${round}`); 
        
        //Sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);

        //Rolar dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);

        }
        if(block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE


            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);

        }
        if(block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} Confrontou com ${character2.NOME}! 🥊`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            if(powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto 🐢`);
                character2.PONTOS--;
                }
            if(powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto 🐢`);
                character1.PONTOS--;
            }else if (powerResult1 === powerResult2) {
            console.log("Confronto empatado. Nenhum ponto foi perdido!");
             }
        }

        if(totalTestSkill1 > totalTestSkill2) { //Verificando o vencedor da rodada!
            console.log(`${character1.NOME} Marcou um ponto!`);
            character1.PONTOS++;
        }else if(totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} Marcou um ponto!`);
            character2.PONTOS++;
        }
        console.log("*********************");
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado Final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)
    
    if(character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} é o vencedor da corrida 🏆!`)
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n${character2.NOME} é o vencedor da corrida 🏆!`)
    } else {
        console.log("A corrida terminou em empate! ");
    }
    rl.close();
    process.exit;
}

async function main(){ //Função main(principal) responsável por chamar as outras funções
    showPlayers(); // Exibe os personagens para o usuário

    let player1 = await choosePlayer(1); // Usuário escolhe o primeiro personagem
    let player2;

    do {
        player2 = await choosePlayer(2); // Usuário escolhe o segundo personagem
        if (player1 === player2) {
            console.log("Você não pode escolher o mesmo personagem duas vezes, escolha outro.");
        }
    } while (player1 === player2); // Garante que os dois personagens sejam diferentes

    console.log(`🏁 🚩 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2); //await usado para esperar a função executar
    await declareWinner(player1, player2);
};

main(); //Chamando a função, também pode ser utilizado parenteses para envolver a função main


//Verificar o confronto, não quer aparecer o ícone, verificar estrutura de controle
