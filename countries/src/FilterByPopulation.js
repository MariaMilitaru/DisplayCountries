import React, { Component } from 'react';


export default class FilterByPopulation extends Component {
    render() {
        return (
            <div className="filter-box">
                <p className='filter-title'>POPULATION RANGE:</p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="firstRange" name="population" value="500-1000000" />
                    <label htmlFor="firstRange">500-1.000.000</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="secondRange" name="population" value="1000000-10000000" />
                    <label htmlFor="secondRange">1.000.000-10.000.000</label>
                </p>
                <p>
                    <input
                        onChange={(ev) => this.props.changeFilter(ev.target.value)}
                        type="radio" id="thirdRange" name="population" value="10000000-100000000" />
                    <label htmlFor="thirdRange">10.000.000-100.000.000</label>
                </p>
            </div>

        )
    }
}
