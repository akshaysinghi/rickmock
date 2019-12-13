import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import Loader from '../components/Loader';
import CharacterList from '../components/CharacterList';
import FilterSort from '../components/FilterSort';
import PaginationView from '../components/PaginationView';
import {getCharacters, getFilterCharacters, getPaginateCharacters} from '../utils/api-service';
import {sortByDescending, sortByAscending} from '../utils/util-service';
import {sortingParams} from './../utils/constants';

class App extends Component {

    constructor() {
        super()
        this.state = {
            loaded: false,
            searchfield: '',
            characterList: [],
            nextPagination: '',
            prevPagination: '',
            sortingType: sortingParams.ASCENDING,
            speciesFilter: '',
            genderFilter: ''
        }
    }

    render() {
        const {loaded, sortingType, searchfield, nextPagination, prevPagination} = this.state;
        return (
            <Container fluid>
                <Header searchChange={this.onSearchChange} searchValue={searchfield}/>
                {loaded ? (<FilterSort sortingType={sortingType} sortChange={this.onSortChange}
                                       speciesFilter={this.onSpeciesFilter} genderFilter={this.onGenderFilter}/>) : <></>}
                {loaded ? (
                    <PaginationView className={'text-center'} onNextPagination={this.onNextPagination} onPrevPagination={this.onPrevPagination}
                                    nextPagination={nextPagination} prevPagination={prevPagination}/>) : <></>}
                {loaded ? (<CharacterList characters={this.getFilterCharacter()}/>) : (<Loader/>)}
            </Container>
        );
    }

    componentDidMount() {
        this.fetchDetail();
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    getFilterCharacter = () => {
        const {searchfield, loaded} = this.state;
        let {characterList} = this.state;
        let list = [];
        if (loaded) {
            list = characterList.filter(character => {
                return character.name.toLowerCase().includes(searchfield.toLowerCase());
            });
            list = this.sortData(list);
        }
        return list;
    }

    fetchDetail = () => {
        getCharacters().then(data => this.setStateDetail(data));
    }

    fetchFilteredDetail = (speciesFilter, genderFilter) => {
        getFilterCharacters(speciesFilter, genderFilter).then(data => {
            this.setState({speciesFilter: speciesFilter, genderFilter: genderFilter});
            this.setStateDetail(data);
        });
    }

    fetchPaginateCharacters = (url) => {
        getPaginateCharacters(url).then(data => this.setStateDetail(data))
    }

    onSpeciesFilter = (event) => {
        const {genderFilter} = this.state;
        let value = event.target.value;
        this.fetchFilteredDetail(value, genderFilter);

    }

    onGenderFilter = (event) => {
        const {speciesFilter} = this.state;
        let value = event.target.value;
        this.fetchFilteredDetail(speciesFilter, value);
    }

    onNextPagination = () => {
        const {nextPagination} = this.state;
        this.fetchPaginateCharacters(nextPagination);
    }

    onPrevPagination = () => {
        const {prevPagination} = this.state;
        this.fetchPaginateCharacters(prevPagination);
    }

    onSortChange = (event) => {
        this.setState({sortingType: event.target.value});
    };

    setStateDetail = (data) => {
        this.setState({
            characterList: data.results ? data.results : [],
            nextPagination: data.info ? data.info.next : '',
            prevPagination: data.info ? data.info.prev : '',
            searchfield: '',
            loaded: true
        })
    }

    sortData = (list) => {
        const {sortingType} = this.state;
        let tempCharacters = list;
        if (list && list.length > 0) {
            if (sortingType === sortingParams.DESCENDING) {
                tempCharacters = sortByDescending(list);
            }
            else tempCharacters = sortByAscending(list);
        }
        return tempCharacters;
    }

}

export default App;
