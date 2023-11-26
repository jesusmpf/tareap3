const lista_pokemon = document.querySelector("#lista-pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {
    
    let tipos = poke.types.map((type) => 
        `<p class="${type.type.name}">${type.type.name}</p>`
    );
    tipos = tipos.join('');

    const div = document.createElement("div");
    div.classList.add("especie");
    div.innerHTML = `
        <div class="especie">
            <h2 class="poke-id">#${poke.id}</h2>
            <div class="poke-img">
                <img src=${poke.sprites.front_default} alt="${poke.name}" title="${poke.name}"> 
            </div>
            <h2 class="poke-nombre">${poke.name}</h2>
            <div class="poke-tipos">
                ${tipos}
            </div>
        </div>`;
    lista_pokemon.append(div);
}