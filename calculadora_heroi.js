let vitorias=200
let derrotas=24
let nivel

function classificador(vitorias){
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }
    return nivel
}

let saldoVitorias = vitorias-derrotas
let nivelHeroi = classificador(vitorias)
console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivelHeroi)