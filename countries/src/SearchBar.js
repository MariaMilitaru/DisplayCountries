import React, { Component } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <FontAwesomeIcon icon={faSearch} />
                <input className="search-input"
                type="text" 
                value={this.props.searchText} 
                placeholder="Search for Countries/Code/Capital"
                onChange={(ev) => this.props.changeSearchText(ev.target.value)}
                />
                {/* <FontAwesomeIcon icon={faTimes} /> */}
                
            </div>
        )
    }
}
