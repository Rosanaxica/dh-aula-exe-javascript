var objProdutos = [
    {
        nome: "Laranja",
        valor: 2.00
    }, {
        nome: "Pera",
        valor: 2.00
    }, {
        nome: "Detergente",
        valor: 1.25    }]

function valorTotal(array) {
    var totalProdutos = 0;
   array.map(item => {
        totalProdutos += item.valor
    });
    console.log(totalProdutos);
}

valorTotal(objProdutos);