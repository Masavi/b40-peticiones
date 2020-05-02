const getRandomAdvice = async (axios) => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getRandomAdvice;