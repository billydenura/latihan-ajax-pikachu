async function getPikachu(){
    let pokemon = document.getElementById("pokemon")
    let pikachu = await fetch("https://pokeapi.co/api/v2/pokemon/25",{method:"GET"}) 
    let json = await pikachu.json()
    let pokemonSingle = document.createElement("div")
    pokemon.append(pokemonSingle)
    let name = document.createElement("p")
    name.innerHTML = json.name
    pokemonSingle.append(name)
    let gambar = document.createElement("img")
    gambar.src = json.sprites.front_default
    pokemonSingle.append(gambar)
    pokemonSingle.style.backgroundColor = "#e7c859"
    pokemonSingle.style.border = "2px solid #d0b34a"
}
let getPokemon = document.getElementsByTagName("button")[0]
getPokemon.addEventListener("click",getPikachu)