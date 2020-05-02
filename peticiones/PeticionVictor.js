const getUserGitHub = async (axios) => {
    try {
      const res = await axios.get('https://api.github.com/users/oicrruf');
      return res;
    } catch (error) {
      return error;
    }
  }
  
  module.exports = getUserGitHub;