const Tempo = 5; 
const VelMedia = 90;



const Distancia = Tempo * VelMedia;

const Consumo = Distancia / 12;

console.log(`Sua velocidade média é ${VelMedia} km/h, tempo gasto em viagem ${Tempo} horas, 
a distância percorrida foi ${Distancia}km, seu gasto de gasolina: ${Consumo}`)

