

const comparar5 = 5 > 20 && 5 < 2 // 5 não é maior que 20 e não é menor que 2
console.log(comparar5)

const cincoEhIgualCinco = 5 === 5 || 5 === "5" // false 5 é igual a 5 ou igual a uma string
console.log(cincoEhIgualCinco)

const negar = 20 !== 50 // 20 não é maior que 50
console.log(negar)

const negar2 = 20 !== 50 || 50 !== 60
console.log(negar2)

console.log("*************************************************************************")

const salario = 2000
const creche = 45.50
const filho = 2

const novoSalarioComAuxilio = (filho * creche) + salario
console.log("Novo salário com aumento do auxilio da creche R$", novoSalarioComAuxilio)
console.log("*************************************************************************")
// Janeiro: R$ 5.784,50
// - Fevereiro: R$ 3.418,41
// - Março: R$ 4.124,10
// - Abril: R$ 1.874,00
// - Maio: R$ 7.000,00
// - Junho: R$ 9.450,00



const novoSalarioJan = 5784.50 * 0.1 + novoSalarioComAuxilio

const novoSalarioFev = (3418.41 * 10) / 100 + novoSalarioComAuxilio 

const novoSalarioMar = (4124.10 * 10) / 100 + novoSalarioComAuxilio

const novoSalarioAbril = (1.874,00 * 10) / 100 + novoSalarioComAuxilio

console.log("Salario com comissão em Janeiro R$",novoSalarioJan)
console.log("Salario com comissão em Feveiro R$",novoSalarioFev)
console.log("Salario com comissão em Março R$",novoSalarioMar)
console.log("Salario com comissão em Abril R$",novoSalarioAbril)

console.log("*****************************************************")

const salarioComDescontoJ = novoSalarioJan - (novoSalarioJan * (5 / 100))
const salarioComDescontoF = novoSalarioFev - (novoSalarioFev * 0.05)
console.log("Salario com desconto do INSS em Janeiro R$", salarioComDescontoJ.toFixed(2))
console.log("Salario com desconto do INSS em Janeiro R$", salarioComDescontoF.toFixed(2))



