const getalldoc = async(axios) => {
    try {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all');
        return res;
    } catch (error) {
        return error;
    }
}

module.exports = getalldoc;