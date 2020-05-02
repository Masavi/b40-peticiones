const getPeopleInfo = async (axios) => {
    try {
      const res = await axios.get('https://pipl.ir/v1/getPerson');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getPeopleInfo;