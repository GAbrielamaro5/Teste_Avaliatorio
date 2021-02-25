const addNome = (...nomes) => {

const ListName = [...nomes]

return ListName
}

const nomes = addNome("gabriel","lucas","andre","kezia","lumena","karol","cristiano","vanessa","ana","andrei")
console.log(nomes)