
var arrayNota = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];


function verificaNota(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 7) {
            console.log(array[index])
        }
    }
}


verificaNota(arrayNota)
