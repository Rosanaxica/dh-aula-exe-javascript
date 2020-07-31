
function felizAnoNovo(callback) {
    setTimeout(() => {
        for (let index = 0; index <= 10; index++) {
            console.log(index);

        }
        callback();
    }, 3000)

}
function frase() {
    console.log("feliz ano novo")
}
felizAnoNovo(frase);