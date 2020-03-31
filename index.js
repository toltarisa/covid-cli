#!/usr/bin/env node

const questions = require('./src/questions');
const functions = require('./src/functions');
const inquirer = require('inquirer');
const baseUrl = 'https://corona.lmao.ninja/'
const urls = {
  allCases:`${baseUrl}all`,
  countryTotals: `${baseUrl}countries`,
  specificCountry: `${baseUrl}countries/`,
  sortCuntries: `${baseUrl}countries?sort=`
}

const run = async() => {
  const credential = await questions.getAllCases();
  const { answer } = credential;
  
  switch(answer){
    case 'See Global Stats':
      return functions.getAllCases(urls.allCases);
      
    case 'Get All Countries Totals':
      return functions.getAllCountriesTotals(urls.countryTotals);
    case 'See details about specific country':
      return inquirer.prompt({
        type: 'input',
        name: 'country',
        message: "Enter country name"
      }).then(answers => {
        const fullUrl = `${urls.specificCountry}${answers.country.trim().toLowerCase()}`;
        functions.getSpecificCountryData(fullUrl);
      });
    case 'Sort all countries':
      return inquirer.prompt({
        type:'list',
        name:'criteria',
        message:'Sort by following',
        choices:[
          'cases','todayCases','deaths','recovered','critical'
        ]
      }).then(answers => {
        const { criteria } = answers;
        const fullUrl = `${urls.sortCuntries}${criteria}`;
        functions.sortAllCountriesBy(fullUrl)
      })
    default:
      return 0
    
  }
}

run();