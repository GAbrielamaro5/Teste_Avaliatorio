const A = [1,2,3,4,5,6,7,8,9,10]
const B = []

for(let i = 0;i < A.length; i++){
    B.push([i + 1] * 3)
}

console.log(`Resultado de matriz A = ${A}`)
console.log(`Resultado de matriz B = ${B}`)