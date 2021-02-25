const imparSomar = (...value) => {
    const A = [...value]
    const results = A.filter((valor) => {
        if (valor % 2 == 1) {
            return valor
        }
    }).reduce((atual, acumulador) => {
        return atual + acumulador
    })
    return results
}

const results = imparSomar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log("soma dos numeros impares " + results)