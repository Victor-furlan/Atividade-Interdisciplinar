const numeroCorreto = Math.floor(Math.random() * 10) + 1;
let palpite = 0;

while (palpite !== numeroCorreto) {
    palpite = parseInt(prompt("Adivinhe um número entre 1 e 10: "));
    
    if (palpite === numeroCorreto) {
        alert("Parabéns! Você adivinhou o número.");
    } else {
        alert("Tente novamente!");
    }
}