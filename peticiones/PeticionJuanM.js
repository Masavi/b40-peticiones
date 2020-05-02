const getCoinGecko = async (axios) => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/finance_platforms?per_page=5');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getCoinGecko;