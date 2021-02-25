const fatorial = (fator) => {
    let count = 1
    let resultado = 1

    while (count <= fator) {

        resultado *= count
        count++

    }
    return resultado
}
console.log(fatorial(5))