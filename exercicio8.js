const fatorial = (fator) => {
    let count = 1
    let resultado = 1

    while (count <= fator) {

        resultado *= count
        console.log(count++)

    }
    return resultado
}
console.log("Valor fatorial " + fatorial(5))