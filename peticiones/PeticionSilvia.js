const getCovidSummary= async(axios)=>{
    try {
        const res= await axios.get('https://api.covid19api.com/summary');
        return res;
    } catch (error) {
        return error;
    }
}

module.exports = getCovidSummary