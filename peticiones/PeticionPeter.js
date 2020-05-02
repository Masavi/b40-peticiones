// Pedir 10 urls de fotos de perritos Shibas Inus bebés
const getShibas = async (axios) => {
  try {
    const res = await axios.get('http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true');
    return res;
  } catch (error) {
    return error;
  }
}

module.exports = getShibas;
