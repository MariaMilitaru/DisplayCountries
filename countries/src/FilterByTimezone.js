import React, { Component } from 'react';

export default class FilterByTimezone extends Component {
  render() {
    const timezones = this.props.timezones;
    return (
        <div className='filter-box'>
             <p className='filter-title'>TIMEZONE FILTER:</p>
                {timezones.map((x) => {
                    return (
                        <p key={x}>
                                <input 
                                    onChange={(ev) => this.props.changeFilter(ev.target.value)}
                                    type="radio" id={x} name="timezone" value={x} />
                                <label htmlFor={x}>{x}</label>
                        </p>
                    )
                })}
        </div>
    )
  }
}

