const api = require('./api');
const chalk = require('chalk');
const Table = require('cli-table');
module.exports = {
    getAllCases: function(url){
        api.getGlobalTotal(url).then(data => {
            const head = Object.keys(data);
            const values = [];
             for (let [key, value] of Object.entries(data)) {
              values.push(value);
            }
            const table = new Table({
              head:head
            })
            table.push(values);
            console.log(table.toString());
          })
    },
    getAllCountriesTotals: function(url){
        api.getAllCountriesTotals(url).then(data => {
           const head = [chalk.blue('country'),chalk.keyword('orange')('cases'),chalk.yellow('today cases'),chalk.red('deaths'),chalk.green('recovered')];
           const result = data.map(({ country, cases, todayCases,deaths,recovered }) => [country, cases, todayCases,deaths,recovered]);
           const table = new Table({
               head:head
           })
           result.forEach(country => {
               table.push(country);
           })

           console.log(table.toString());

        })
    },

    getSpecificCountryData: function(url) {
        api.getSpecificCountryData(url).then(data => {
            const head = Object.keys(data);
            const filtered = head.filter(prop => {
                return !['countryInfo','updated','casesPerOneMillion','deathsPerOneMillion'].includes(prop);
            })
           
            const values = [];
              for (let [key, value] of Object.entries(data)) {
               values.push(value);
            }
            const filteredValues = values.filter((_,index) => {
                return ![1,11,9,10].includes(index);
            });
            
            const table = new Table({
              head:filtered,
            })
            table.push(filteredValues);
            console.log(table.toString());

        })
    },
    sortAllCountriesBy: function(url) {
        api.sortAllCountriesBy(url).then(data => {
            const head = [chalk.blue('country'),chalk.keyword('orange')('cases'),chalk.yellow('today cases'),chalk.red('deaths'),chalk.green('recovered')];
           const result = data.map(({ country, cases, todayCases,deaths,recovered }) => [country, cases, todayCases,deaths,recovered]);
           const table = new Table({
               head:head
           })
           result.forEach(country => {
               table.push(country);
           })

           console.log(table.toString());
        })
    }

}