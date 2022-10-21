

const comparar5 = 5 > 20 && 5 < 2 // 5 não é maior que 20 e não é menor que 2
console.log(comparar5)

const cincoEhIgualCinco = 5 === 5 || 5 === "5" // false 5 é igual a 5 ou igual a uma string
console.log(cincoEhIgualCinco)

const negar = 20 !== 50 // 20 não é maior que 50
console.log(negar)

const negar2 = 20 !== 50 || 50 !== 60
console.log(negar2)

console.log("*************************************************************************")



// - Janeiro: R$ 5.784,50
// - Fevereiro: R$ 3.418,41
// - Março: R$ 4.124,10
// - Abril: R$ 1.874,00
// - Maio: R$ 7.000,00
// - Junho: R$ 9.450,00
const salario = 2000
const auxPorFilho = 45.50
const qtdFilhos = 2
//
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874
const vendasMaio = 7000
const vendasJunho = 9450
const salarioComAuxilio = salario + (qtdFilhos * auxPorFilho)
console.log("Salário com auxilio creche R$", salarioComAuxilio)
console.log("*****************************************************")
const salarioJan = salarioComAuxilio + (vendasJaneiro * 0.1)
const salarioFev = salarioComAuxilio + (vendasFevereiro * 0.1)
const salarioMarco = salarioComAuxilio + (vendasMarco * 0.1)
const salarioAbril = salarioComAuxilio + (vendasAbril * 0.1)
const salarioMaio = salarioComAuxilio + (vendasMaio * 0.1)
const salarioJunho = salarioComAuxilio + (vendasJunho * 0.1)
console.log("*****************************************************")
console.log("Salário de Jan com comissão de 10%", salarioJan)
console.log("Salário de Fev com comissão de 10%", salarioFev)
console.log("Salário de Março com comissão de 10%", salarioMarco)
console.log("Salário de Abril com comissão de 10%", salarioAbril)
console.log("Salário de Maio com comissão de 10%", salarioMaio)
console.log("Salário de Junho com comissão de 10%", salarioJunho.toFixed(2))
console.log("*****************************************************")
console.log("*****************************************************")
const salarioComDescJan = salarioJan  - (salarioJan * 0.05)
const salarioComDescFev = salarioFev  - (salarioFev *  0.05)
const salarioComDescMarco = salarioMarco -  (salarioMarco *  0.05)
const salarioComDescAbril = salarioAbril -  (salarioAbril*  0.05)
const salarioComDescMaio = salarioMaio  - (salarioMaio *  0.05)
const salarioComDescJunho = salarioJunho -  (salarioJunho *  0.05)
console.log("Salário de Janeiro com desconto do INSS de 5%", salarioComDescJan)
console.log("Salário de Fevereiro com desconto do INSS de 5%", salarioComDescFev)
console.log("Salário de Março com desconto do INSS de 5%", salarioComDescMarco)
console.log("Salário de Abril com desconto do INSS de 5%", salarioComDescAbril)
console.log("Salário de Maio com desconto do INSS de 5%", salarioComDescMaio)
console.log("Salário de Junho com desconto do INSS de 5%", salarioComDescJunho)

const mediaDeSalario = (salarioJan + salarioFev + salarioMarco + salarioAbril + salarioMaio + salarioJunho ) / 6
console.log("*****************************************************")
console.log("*****************************************************")
console.log("A média de salario em 6 meses é de", mediaDeSalario)




