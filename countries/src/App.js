import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Countries from './Countries';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterByRegion from './FilterByRegion';
import FilterByPopulation from './FilterByPopulation';
import FilterByTheRest from './FilterByTheRest';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      searchText: '',
      filterByRegion: '',
      filterByPopulation: '',
      filterByLanguage: '',
      filterByTimezone: '',
      filterByCurrency: ''
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.sort((a, b) => (a.name.common).localeCompare(b.name.common))
          });
        }
      )
  }

  changeSearchText = (text) => {
    this.setState({ searchText: text })
  }
  changeFilterByRegion = (filter) => {
    this.setState({ filterByRegion: filter })
  }
  changeFilterByPopulation = (filter) => {
    this.setState({ filterByPopulation: filter })
  }
  changeFilterByLanguage = (filter) => {
    this.setState({ filterByLanguage: filter })
  }
  changeFilterByTimezone = (filter) => {
    this.setState({ filterByTimezone: filter })
  }
  changeFilterByCurrency = (filter) => {
    this.setState({ filterByCurrency: filter })
  }

  getFilteredCountries = () => {
    const searchText = this.state.searchText.toLowerCase();
    const {items, filterByPopulation, filterByRegion, filterByLanguage, filterByTimezone, filterByCurrency } = this.state;
    const populationSplit = filterByPopulation.split("-");

    return items.filter((val) => {
      const name = val.name.common.toLowerCase();
      const code = val.cca2.toLowerCase();
      const capital = (val.capital !== undefined ? val.capital[0].toLowerCase() : '');
      const searchByText = this.state.searchText == '' ||
        name.includes(searchText) ||
        code.includes(searchText) ||
        capital.includes(searchText);

      const region = val.region;
      const searchByRegion = region.includes(filterByRegion);

      const population = val.population;
      const searchByPopulation = ((populationSplit[0] <= population && populationSplit[1] >= population) || populationSplit == '')

      const lang = ((val.languages) !== undefined ? val.languages : { '': '' });
      const language = (Object.values(lang)[0] !== undefined ? Object.values(lang)[0] : '');
      const searchByLanguage = language.includes(filterByLanguage);

      const timezone = (val.timezones[0] !== undefined ? val.timezones[0] : '');
      const searchByTimezone = timezone.includes(filterByTimezone);

      const cur = ((val.currencies) !== undefined ? val.currencies : { '': '' });
      const currency = (Object.keys(cur)[0] !== undefined ? Object.keys(cur)[0] : '');
      const searchByCurrency = currency.includes(filterByCurrency);


      if (searchByText && searchByRegion && searchByPopulation && searchByLanguage && searchByTimezone && searchByCurrency) {
        return true;
      } else {
        return false;
      }

    })
  }

  render() {
    const { isLoaded, items, searchText } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container fluid>
          <Header />
          <SearchBar searchText={searchText} changeSearchText={this.changeSearchText} />
          <Row className='page-container'>
            <Col  md={2} xs={12} className='page-container-left'>
                <FilterByRegion changeFilter={this.changeFilterByRegion} />
                <FilterByPopulation changeFilter={this.changeFilterByPopulation} />
                <FilterByTheRest countries={items}
                  changeFilterByLanguage={this.changeFilterByLanguage}
                  changeFilterByTimezone={this.changeFilterByTimezone}
                  changeFilterByCurrency={this.changeFilterByCurrency}
                />
            </Col>
            <Col md={10} xs={12} >
                 <Countries countries={this.getFilteredCountries()} />
            </Col>
          </Row>

        </Container>
      )
    }
  }
}
