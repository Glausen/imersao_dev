var numeroSecreto = parseInt(Math.random() * 1001);

var quantidadeChute = 0;

while (chute != numeroSecreto) {

    if (quantidadeChute > 10) {
        console.log ('quantidade de tentativas exedidade' + quantidadeChute + 'o numero secreto era: ' + numeroSecreto)
    } 

    var chute = parseInt (prompt ('Digite um numero de 1 a 1000'))

    if (chute < 0 ||  chute > 1000 ){
        console.log ('Invalido')
    }

    quantidadeChute = quantidadeChute + 1


    if (chute === numeroSecreto) {
        console.log('Acertou !' + quantidadeChute + numeroSecreto)
    } else if (chute > numeroSecreto) {
        console.log('numero é menor' + quantidadeChute)
    } else if (chute < numeroSecreto) {
        console.log('numero é maior' + quantidadeChute)
    }
}     
