const getPokemon = async (axios) => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu/');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getPokemon;