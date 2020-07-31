const numeros = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let index = 0; index <= 10; index++) {
            console.log(index)
        }
    }
        , 1000)
})


// Ambos os callbacks estão ligados a p
numeros.then(function mensagem() { console.log("Feliz Ano Novo") })
