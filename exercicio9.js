function loop(valor1, valor2, operacao, next) {
   
    const temporizador = setInterval(() => {
        if (next == "sim") {

            if (operacao == "+") {
                console.log(valor1 + valor2)
                clearInterval(temporizador)

            }
            if (operacao == "-") {
                console.log(valor1 - valor2)
                clearInterval(temporizador)

            }
            if (operacao == "*") {
                console.log(valor1 * valor2)
                clearInterval(temporizador)

            }
            if (operacao == "/") {
                console.log(valor1 / valor2)
                clearInterval(temporizador)

            } 
        }if (next == "nao") {
            console.log("volte sempre")
            clearInterval(temporizador)
        }
    }, 1000)

    return temporizador
}

const sim = "sim"
const nao = "nao"

loop(15, 10, "/", sim)
