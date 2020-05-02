const getNumberFact = async (axios) => {
  try {
    const res = await axios.get('http://numbersapi.com/random/trivia');
    return res;
  } catch (error) {
    return error;
  }
}

module.exports = getNumberFact;
