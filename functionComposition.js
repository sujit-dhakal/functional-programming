const deducttax = (grossSalary) => grossSalary*0.8
const addbonus = (grossSalary)=>grossSalary+500

const netSalary = (addbonus(deducttax(2000)))

console.log(netSalary)