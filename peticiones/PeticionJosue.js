const getCatFact = async (axios) => {
  try {
    const res = await axios.get("https://cat-fact.herokuapp.com/facts/random");
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = getCatFact;
