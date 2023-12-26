function cal_Nivel (vitorias, derrotas) {
    let saldoVit = vitorias - derrotas;
    let nivel;
    
        if	(saldoVit <= 10){
        nivel = "ferro"}
            else if (saldoVit >= 11 && saldoVit <= 20) {
                 nivel = "Bronze";  
        }        else if (saldoVit >= 21 && saldoVit <= 50) {
                 nivel = "Prata";
        }        else if (saldoVit >= 51 && saldoVit <= 80) {
                 nivel = "Ouro";
        }        else if (saldoVit >= 81 && saldoVit <= 90) {
                 nivel = "Diamante";
        }        else if (saldoVit >= 91 && saldoVit <= 100) {
                 nivel = "Lendário";
        }   else {
            nivel = "Imortal";
        }
            
            console.log(`O Herói tem um saldo de ${saldoVit} e está no nível de ${nivel}`);
    
    }
    // Faça um teste, inclua quantidade de vitórias e derrotas:
    cal_Nivel( 20, 10);
  
