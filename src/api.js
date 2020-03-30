const axios  =require('axios');
module.exports = {
    getGlobalTotal: async function (url){
        try {
            const response  = await axios.default.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        } 
    
    },

    getAllCountriesTotals: async function(url) {
        try {
            const response  = await axios.default.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    getSpecificCountryData: async function(url){
        try {
            const response  = await axios.default.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    sortAllCountriesBy: async function(url){
        try {
            const response  = await axios.default.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


}