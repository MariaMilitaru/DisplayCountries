import React, { Component } from 'react';

export default class FilterByLanguage extends Component {
    render() {
        const languages = this.props.languages;
        return (
            <div className='filter-box'>
                <p className='filter-title'>LANGUAGE FILTER:</p>
                {languages.map((x) => {
                    return (
                        <p key={x}>
                            <input 
                                onChange={(ev) => this.props.changeFilter(ev.target.value)}
                                type="radio" id={x} name="language" value={ x } />
                            <label htmlFor={x}>{x}</label>
                        </p>
                    )
                })}
            </div>
        )
    }
}

