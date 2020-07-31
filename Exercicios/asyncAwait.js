
function contarDeUmEmUmSegundo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(contar())
        }
        );
    }, 2000);
};

function contar() {
    for (let index = 10; index >= 1; index--) {
        console.log(index)
    }
}
async function mensagem() {
    await contarDeUmEmUmSegundo();
}

mensagem().then(() => {
    console.log("Feliz ano novo");  // exibe 60 depois de 2 segundos.
});
