let heroi = "flavio"
let quantidadeXp = "7000"
let nivel

if(quantidadeXp <= 1000){
    heroi = "Ferro"
}
else if(quantidadeXp >= 1001 && quantidadeXp <= 2000){
    heroi = "Bronze"
}
else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    heroi = "Prata"
}
else if(quantidadeXp >= 5001 && quantidadeXp <= 7000){
    heroi = "Ouro"
}
else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
    heroi = "Platina";
}
else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
    heroi = "Ascendente";
}
else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    heroi = "Imortal";
}
else if(quantidadeXp > 10001)
{
    heroi = "Radiante";
}
else{
    heroi = "Desconhecido"
}

console.log("O Herói ${heroi} está com ${quantidadeXp} nível de XP e está no nível de ${nivel}!")