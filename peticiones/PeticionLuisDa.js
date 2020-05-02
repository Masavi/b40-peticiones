
  const diasFestivos = async (axios) => {
    try {
      const res = await axios.get('https://date.nager.at/Api/v1/Get/MX/2020');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = diasFestivos;