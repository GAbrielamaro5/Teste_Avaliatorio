let maior = 0
let meio = 0
let results = 0
let menor = 0

const A = 3000
const B = 101
const C = 5000

if(A > B && A > C ){
    maior = A;
} if(B > C && B > A){
    maior = B;
} if(C > A && C > B){
    maior = C ;

} if(A < B && A < C){
    menor = A;
} if(B < C && B < A){
    menor = B;
} if(C < A && C < B){
  menor = C;
}
if(A > menor && A < maior){
    meio = A;
}if(B > menor && B < maior){
    meio = B;
}if(C > menor && C < maior){
    meio = C;
}

console.log("crescente: "+ menor+","+meio+","+ maior)