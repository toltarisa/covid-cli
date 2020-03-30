const axios  =require('axios');
 module.exports = async function (url){
    try {
        const response  = await axios.default.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    } 

}
