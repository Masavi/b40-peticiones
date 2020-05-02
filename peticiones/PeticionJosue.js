const getRandomUser = async (axios) => {
  try {
    const res = await axios.get("https://randomuser.me/api/");
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = getRandomUser;
