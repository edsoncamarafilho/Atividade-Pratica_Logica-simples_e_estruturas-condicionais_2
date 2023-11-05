/*Atividade Prática 02 - Lógica simplese
estruturas condicionais 2*/

/* EDSON CÂMARA FILHO */


// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

//  const celsius = Number(prompt('Digite a temperatura em graus celius'))

const celsius = 30

 const fahrenheit = (celsius * 9 / 5) + 32

  document.write(`1. A temperatura ${celsius} em Celsius equivale a ${fahrenheit.toFixed(1)} em fahrenheit </br></br>`)
 
//  // 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
//  // semana correspondente utilizando a estrutura condicional switch.
 
//  let diaDaSemana = parseFloat(prompt('Dias da Semana: insira um valor entre 1 a 7.'))

let diaDaSemana = 4

switch (diaDaSemana) {
    case 1:
        document.write('2. Segunda </br></br>')
        break;
    case 2:
        document.write('2. Terça </br></br>')
        break;
    case 3:
        document.write('2. Quarta </br></br>')
        break;
    case 4:
        document.write('2. Quinta </br></br>')
        break;
    case 5:
        document.write('2. Sexta </br></br>')
        break;
    case 6:
        document.write('2. Sábado </br></br>')
        break;
    case 7:
        document.write('2. Domingo </br></br>')
        break;
    default:
        document.write('Dia da semana invalido, insira um número entre 1 a 7 </br></br>')
}


// // 3. Crie um programa que peça um número e verifique se ele é positivo,
// // negativo ou zero.


// let numeroInteiro= parseFloat(prompt('Digite um número inteiro:'))

let numeroInteiro = 2

if(numeroInteiro > 0) {
   document.write('3. O número é positivo </br></br>') 
} else if (numeroInteiro < 0){
    document.write('3. O numero é negativo </br></br>')  
} else {
    document.write('3. O número é 0 </br></br>')
}


// // 4. O custo de um carro novo ao consumidor é a soma do custo de
// // fábrica com a porcentagem do distribuidor e dos impostos
// // (aplicados ao custo de fábrica). Supondo que o percentual do
// // distribuidor seja de 28% e os impostos de 45%, escrever um
// // algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// // o custo final ao consumidor.

// const custoDeFabrica = Number(prompt('Digite o custo de fábrica do carro:'))

const custoDeFabrica = 1500

const percentualDistribuidor = custoDeFabrica * 0.28

const impostos = custoDeFabrica * 0.45

const custoFinal = custoDeFabrica + percentualDistribuidor + impostos

document.write(`4. O custo final do carro fica em R$ ${custoFinal.toFixed(2).replace('.',',')} </br></br>`)


// // 5. Desenvolva um algoritmo que faça o cálculo do índice de massa
// // corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// // que digite sua altura, em seguida solicitar que digite seu peso e que
// // lhe exiba o status. O status vai variar da seguinte forma:
// // a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// // “Você está abaixo da faixa de peso ideal”;
// // b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// // // // “Você está acima da faixa de peso ideal”;
// // c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// // 24,99, o status a ser mostrado será “Você está dentro da faixa
// // de peso ideal”.


// const altura = Number(prompt('Digite a sua altura:'))
// const peso = Number(prompt('Digite o seu peso:'))

const altura = 170
const peso = 69

const imc =(peso/(altura*altura))

let seuImc =
    imc > 18.5 ? 'Você está abaixo da faixa de peso ideal' : 
    imc < 24.99 ? 'Você está acima da faixa de peso ideal' :
    'Você está dentro da faixa de peso ideal'

document.write (`5. Seu imc é de ${seuImc} <br><br>`)    


// // 6. Escreva um algoritmo que solicite 2 números e uma operação
// // matemática. O algoritmo deve realizar o cálculo com os 2 números
// // digitados conforme a operação informada.

// const num1 =  Number(prompt("Digite o primeiro número: "))
// const operador = prompt("Digite a operação que você realiza fazer: ")
// const num2 =  Number(prompt("Digite o segundo número: "))


const num1 = 4
const operador = '*'
const num2 = 4




let resultado
if (operador == "+") {
    resultado = num1 + num2
} else if (operador == "-") {
    resultado = num1 - num2
} else if (operador == "*" ) {
    resultado = num1 * num2
} else if (operador == "/") {
    resultado = num1 / num2 
} else {
    resultado = "inválido, pois você precisa utilizar um destes operadores: +, -, * ou /"
}
document.write(`6. O resultado da sua operação é ${resultado}. </br></br>`)


// // 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// // a conta do usuário deve ser criada já com um saldo positivo. O
// // usuário precisa informar a quantidade de dinheiro que deseja
// // retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// // menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// // R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// // certo com o saque, e se o usuário informar um valor maior que o
// // saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// // suficiente em conta para realizar o saque.
// // OBS: Na verificação se o valor do saque é maior que o saldo deve
// // ser considerado e também contabilizado o valor da taxa a ser
// // cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// // da taxa do saque não pode ser maior que o saldo disponível.

const saldoInicial = 100
// const saque =  Number(prompt(`Seu saldo é de ${saldoInicial}. Quanto você quer sacar? (Somente aceita saques múltiplos de R$ 5,00.)`))

const saque = 50

const taxa = 4.50

let valorSaque = saque + taxa
let saldoAtual = saldoInicial - valorSaque
let saldoInsuficiente = "Saldo insuficiente."
let valorInconsistente = "Valor requerido inconsistente (Digite um valor múltiplo de R$ 5,00.)"

if (saque%5==0 && saque>0) {  
    if (valorSaque <= saldoInicial) {
        document.write(`7. Seu saldo atual é de R$ ${saldoAtual.toFixed(2).replace(".",",")}. <br><br>`)
    } else {
        document.write(`7. ${saldoInsuficiente}<br><br>`)
    }
} else {
    document.write(`7. ${valorInconsistente}<br><br>`)
}


// // Idade              Peso                       Categoria

// // Até 12 anos                                   infantil
// // 13 a 16 anos       Até 40kg                   Juvenil leve
// //                    Acima de 40kg              Juvenil pesado
// // 17 a 24 anos       Até 45kg                   Sênior leve
// //                    Acima de 45kg até 60kg     Sênior médio
// //                    Acima de 60kg              Sênior pesado
// // Acima de 24 anos                              Veterano


// const idade = Number(prompt("Digite sua idade: "))
// const pesoAtleta = Number(prompt("Digite seu peso: "))

const idade = 16
const pesoAtleta = 69

const categoria = 
    idade <= 12 ? "Infantil" :
    idade <= 16 ? pesoAtleta <= 40 ? "Juvenil leve" : "Juvenil pesado" :
    idade <= 24 ? pesoAtleta <= 45 ? "Sênior leve" : pesoAtleta <= 60 ? "Sênior médio" : "Sênior pesado" :
    "Veterano";
document.write(`8. Sua categoria é a ${categoria}. <br><br>`)


// // 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// // ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// // multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// // km acima da velocidade permitida.


// const velocidade = Number(prompt("Digite a velocidade do carro: "))


const taxaMulta = 5
const velocidade = 170

let multa
if (velocidade > 80) {
    multa = (velocidade - 80) * taxaMulta
    document.write(`9. Você ultrapassou a velocidade permitida, sua multa é de R$ ${multa.toFixed(2).replace(".",",")}.<br><br>`)
} else {
    document.write(`9. Sua velocidade está dentro do limite permitido. Parabéns! <br><br>`)
}