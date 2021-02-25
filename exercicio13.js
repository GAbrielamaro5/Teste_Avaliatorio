const SomaEMult = function (...a) {

    const A = [...a]
    const B = []

    A.filter((valor) => {
        if (valor % 2 == 0) {
            return B.push(valor * 5)
        } else {
            return B.push(valor + 5)
        }
    })

    console.log("valor da matriz A: "+ A)
    console.log("valor da matriz B: "+ B)
}


SomaEMult(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)