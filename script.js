const counter = (input) =>{
    fetch(`https://swapi.dev/api/people/${input}/`)
    .then( res => {
        return res.json()
    })
    .then( data => {
        console.log(data)
        document.getElementById("character-name").innerHTML = data.name
        document.getElementById("character-height").innerHTML = `Height : ${data.height}`
        document.getElementById("character-gender").innerHTML = `Gender : ${data.gender}`
    })
}

const Toss = () => {
    let result = Math.floor(Math.random() * 84)
    counter(result)
}

const returnFetch = () =>{
    fetch("https://swapi.dev/api/starships/9/")
    .then( res => {
        return res.json()
    })
    .then( data => {
        console.log(data.name)
    })
}

returnFetch()