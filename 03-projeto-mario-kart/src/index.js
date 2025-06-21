const racers = [
    { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, PONTOS: 0 },
    { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, PONTOS: 0 },
    { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, PONTOS: 0 },
    { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
    { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, PONTOS: 0 },
    { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, PONTOS: 0 },
];

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    if (random < 0.33) return "RETA";
    if (random < 0.66) return "CURVA";
    return "CONFRONTO";
}

async function getRandomObstacle() {
    return Math.random() < 0.5 ? "CASCO" : "BOMBA";
}

async function playRaceEngine(characters) {
    for (let round = 1; round <= 10; round++) {
        console.log(`🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let roundResults = [];

        for (let character of characters) {
            let dice = await rollDice();
            let attribute = 0;
            let attributeName = "";

            if (block === "RETA") {
                attribute = character.VELOCIDADE;
                attributeName = "Velocidade";
            } else if (block === "CURVA") {
                attribute = character.MANOBRABILIDADE;
                attributeName = "Manobrabilidade";
            } else if (block === "CONFRONTO") {
                attribute = character.PODER;
                attributeName = "Poder";
            }

            let total = dice + attribute;
            roundResults.push({ character, total, dice, attribute, attributeName });
            console.log(`${character.NOME} 🎲 rolou ${dice} + ${attributeName} (${attribute}) = ${total}`);
        }

        if (block === "CONFRONTO") {
            // No confronto: quem tiver o maior total ataca quem tiver o menor
            roundResults.sort((a, b) => b.total - a.total);

            let attacker = roundResults[0];
            let defender = roundResults[roundResults.length - 1];

            if (attacker.total !== defender.total) {
                let obstacle = await getRandomObstacle();
                let penalty = obstacle === "CASCO" ? 1 : 2;

                if (defender.character.PONTOS >= penalty) {
                    defender.character.PONTOS -= penalty;
                    console.log(`${attacker.character.NOME} atacou ${defender.character.NOME} com um ${obstacle}! ${defender.character.NOME} perdeu ${penalty} ponto(s).`);
                } else if (defender.character.PONTOS > 0) {
                    console.log(`${defender.character.NOME} perdeu ${defender.character.PONTOS} ponto(s), pois tinha poucos pontos.`);
                    defender.character.PONTOS = 0;
                } else {
                    console.log(`${defender.character.NOME} já estava com 0 pontos.`);
                }

                // Atacante ganha um turbo
                attacker.character.PONTOS++;
                console.log(`${attacker.character.NOME} ganhou um turbo! (+1 ponto)`);
            } else {
                console.log("Empate geral no confronto! Ninguém perdeu ou ganhou pontos.");
            }
        } else {
            // Quem tiver o maior total da rodada ganha 1 ponto
            roundResults.sort((a, b) => b.total - a.total);
            let winner = roundResults[0];
            let tie = roundResults.filter(r => r.total === winner.total);

            if (tie.length === 1) {
                winner.character.PONTOS++;
                console.log(`${winner.character.NOME} venceu a rodada! (+1 ponto)`);
            } else {
                console.log("Empate na rodada! Nenhum ponto ganho.");
            }
        }

        console.log("--------------------------------");
    }
}

async function declareWinner(characters) {
    console.log(`🏆 Resultado Final:`);
    characters.forEach(c => console.log(`${c.NOME} - Pontos: ${c.PONTOS}`));

    let maxPoints = Math.max(...characters.map(c => c.PONTOS));
    let winners = characters.filter(c => c.PONTOS === maxPoints);

    if (winners.length === 1) {
        console.log(`\n${winners[0].NOME} é o grande vencedor! 🎉`);
    } else {
        console.log(`\nEmpate entre: ${winners.map(w => w.NOME).join(", ")} 🤝`);
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida com TODOS os corredores começando...\n`);

    await playRaceEngine(racers);
    await declareWinner(racers);
})();
