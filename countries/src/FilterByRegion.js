import React, { Component } from 'react';

export default class FilterByRegion extends Component {
    render() {
        return (
            <div className='filter-box'>
                <p className='filter-title'>REGION FILTER:</p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="asia" name="region" value="Asia" />
                    <label htmlFor="asia">Asia</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="africa" name="region" value="Africa" />
                    <label htmlFor="africa">Africa</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="europe" name="region" value="Europe" />
                    <label htmlFor="europe">Europe</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="americas" name="region" value="Americas" />
                    <label htmlFor="americas">Americas</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="oceania" name="region" value="Oceania" />
                    <label htmlFor="oceania">Oceania</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="antarctic" name="region" value="Antarctic" />
                    <label htmlFor="antarctic">Antarctic</label>
                </p>

                {/* 
                
                <input type="radio" id="antarctic" name="region" /><label for="antarctic">Antarctic</label> */}
            </div>
        )
    }
}
