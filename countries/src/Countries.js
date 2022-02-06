import React, { Component } from 'react';
import CountryCard from './CountryCard';
import './Countries.css';

export default class Countries extends Component {
    render() {
        const {countries} = this.props ;
        return (
            <div className="countries-div">
                {countries.map(country => (
                    <CountryCard key={country.name.common} country={country} />
                ))}
            </div>
        )
    }
}
