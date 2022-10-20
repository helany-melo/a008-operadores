

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite um outro número"))

const diferenca = num1 > num2
const saoIguais = num1 === num2
const ehDivisivel = num1 % num2 === 0


console.log(`O ${num1} é maior que ${num2} ?`, diferenca)
console.log(`O ${num1} é igual ${num2} ?`, saoIguais)
console.log(`O ${num1} é divisivel por ${num2} ?`, ehDivisivel)