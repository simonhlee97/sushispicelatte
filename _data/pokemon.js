
module.exports = async function() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=32')
  const pokemon = res.json()

  return pokemon;
}