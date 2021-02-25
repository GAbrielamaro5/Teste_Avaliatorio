function maiorEMenor(A,B,C,D,E) {

    //Menor
    if (A < B && A < C && A < D && A < E) {
        console.log("Menor: " + A)
    }
    if (B < A && B < C && B < D && B < E) {
        console.log("Menor: " + B)
    }
    if (C < A && C < B && C < D && C < E) {
        console.log("Menor: " + C)
    }
    if (D < A && D < B && D < C && D < E) {
        console.log("Menor: " + D)
    }
    if (E < A && E < B && E < C && E < D) {
        console.log("Menor: " + E)
    }

    //Maior
    if (A > B && A > C && A > D && A > E) {
        console.log("Maior: " + A)
    }
    if (B > A && B > C && B > D && B > E) {
        console.log("Maior: " + B)
    }
    if (C > A && C > B && C > D && C > E) {
        console.log("Maior: " + C)
    }
    if (D > A && D > B && D > C && D > E) {
        console.log("Maior: " + D)
    }
    if (E > A && E > B && E > C && E > D) {
        console.log("Maior: " + E)
    }
}

maiorEMenor(41,25,5,145,3)