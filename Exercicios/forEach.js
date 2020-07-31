objSerie = [{
    nome: "Rosana",
    serie: 9
},
{
    nome: "Maria ",
    serie: 8
},
{
    nome: "Joao",
    serie: 7
},
{
    nome: "Hugo",
    serie: 8
},
{
    nome: "Jonas",
    serie: 9
},
]
function appendDisciplina(obj) {
    obj.forEach(element => {
        if (element.serie == 8) {
            Object.assign(element, { disciplina: "Historia" })
        } else if (element.serie == 9) {
            Object.assign(element, { disciplina: "Fisica" })

        }

    });
    console.log(obj)


}
appendDisciplina(objSerie)