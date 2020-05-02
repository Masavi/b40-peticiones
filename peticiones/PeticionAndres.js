const getLibrosAsimovAndres = async (axios) => {
    try {
      const res = await axios.get('http://openlibrary.org/search.json?author=asimov');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getLibrosAsimovAndres;