const getHollydayCountry = async (axios) => {
    try {
      const res = await axios.get('https://date.nager.at/api/v2/PublicHolidays/2020/SV');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getHollydayCountry;