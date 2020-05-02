const getRick = async (axios) => {
  try {
    const res = await axios.get('https://rickandmortyapi.com/api/character/1');
    return res;
  } catch (error) {
    return error;
  }
}

module.exports = getRick;