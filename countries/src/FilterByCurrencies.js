import React, { Component } from 'react';

export default class FilterByCurrencies extends Component {
  render() {
    const currencies= this.props.currencies;
    return (
        <div className='filter-box'>
            <p className='filter-title'>CURRENCY FILTER:</p>
                {currencies.map((x) => {
                    return (
                        <p key={x}>
                            <input 
                                onChange={(ev) => this.props.changeFilter(ev.target.value)}
                                type="radio" id={x} name="currency" value={x} />
                            <label htmlFor={x}>{x}</label>
                        </p>
                    )
                })}
        </div>
    )
  }
}
