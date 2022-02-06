import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import './CountryCard.css';


export default class CountryCard extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        const { capital, region, population, cca2, latlng, area, timezones } = this.props.country;
        const flag = this.props.country.flags.png;
        const name = this.props.country.name.common;
        
        let currencies = [] ;
        if(this.props.country.currencies !== undefined){
             currencies = Object.keys(this.props.country.currencies);
        }
        let languages = [];
        if(this.props.country.languages !== undefined){
            languages = Object.values(this.props.country.languages);
        }
        


        return (
            <div onClick={this.handleModal} className="country-card">
                <div className="country-card-header">
                    <img className="country-card-flag" src={flag}></img>
                    <span className="country-card-name">{name}</span>
                </div>
                <p>CAPITAL: {capital}</p>
                <p>REGION: {region}</p>
                <p>POPULATION: {population}</p>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        <img className="module-flag" src={flag}></img>
                        <span className="module-name">{name}</span>
                    </Modal.Header>
                    <Modal.Body>
                        <p>CODE: {cca2}</p>
                        <p>CAPITAL: {capital}</p>
                        <p>REGION: {region}</p>
                        <p>POPULATION: {population}</p>
                        <p>LAT: {latlng[0]}</p>
                        <p>LONG: {latlng[1]}</p>
                        <p>AREA: {area}</p>
                        <p>
                            TIMEZONES: {timezones.map((timezone) => <span key={timezone}> {timezone} </span>)}
                        </p>
                        <p>
                            CURRENCIES: {currencies.map((c) => <span key={c}> {c} </span>)}
                        </p>
                        <p>
                            LANGUAGES: {languages.map((language) => <span key={language}> {language} </span>)}
                        </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>Close Modal</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
