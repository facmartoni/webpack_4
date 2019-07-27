function render(data) {
  const pokemon = document.createElement("img");
  pokemon.setAttribute("src", data.sprites.front_default);
  document.body.appendChild(pokemon);
}

export default render;
