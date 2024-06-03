let miNombre = ""


const url = "https://jsonplaceholder.typicode.com/users/1"
const miPromesa = fetch(url)


// async y await
/*miPromesa
    .then((laRespuesta) => {
        return laRespuesta.json()
    })
    .then((info) => {
        console.log(info)
    })*/

const elContainer = document.getElementById("container")
const urlRickandMorty = "https://rickandmortyapi.com/api/character/"

// Modelo de funcion async...await
/*
const procesarPromesa = async () => {
    try {
        const respuesta = await fetch(url)

        const info = await respuesta.json()

        console.log(info);
    } catch (error) {
        console.log("Hubo un error")
    }
}*/

const procesarPromesa = async () => {
    try {
        const respuesta = await fetch(urlRickandMorty)

        const info = await respuesta.json()

        console.log(info);
    } catch (error) {
        console.log("Hubo un error")
    }
}

procesarPromesa(urlRickandMorty)
    .then((info) => {
        info.results.forEach((personaje) => {
            elContainer.innerHTML += `<img src="${personaje.image}"></img>`
        })
    })