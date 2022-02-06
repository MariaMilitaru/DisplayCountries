import React, { Component } from 'react';
import FilterByCurrencies from './FilterByCurrencies';
import FilterByLanguage from './FilterByLanguage';
import FilterByTimezone from './FilterByTimezone';

export default class FilterByTheRest extends Component {
  render() {
    const { countries, changeFilterByLanguage, changeFilterByTimezone, changeFilterByCurrency} = this.props;

    let languages = countries.map((x) => {
        if(x.languages !== undefined){
            return Object.values(x.languages)[0];
        }else{
            return 'English';
        }
    })
    languages = [...new Set(languages)]; 


    let timezones = countries.map((x) => {
        if(x.timezones !== undefined){
            return x.timezones[0];
        }else{
            return 'UTC';
        }
    })
    timezones = [...new Set(timezones)]; 


    let currencies = countries.map((x) => {
        if(x.currencies !== undefined){
            return Object.keys(x.currencies)[0];
        }else{
            return 'AUD';
        }
    })
    currencies = [...new Set(currencies)]; 
   
    return (
        <div>
            {<FilterByLanguage languages={languages} changeFilter={changeFilterByLanguage}/>}
            {<FilterByTimezone timezones={timezones} changeFilter={changeFilterByTimezone}/>}
            {<FilterByCurrencies currencies={currencies} changeFilter={changeFilterByCurrency}/>}
        </div>
    )
  }
}

