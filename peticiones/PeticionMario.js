const getKriptoCoinsList = async (axios) => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getKriptoCoinsList;