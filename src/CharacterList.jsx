import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CharacterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charactername: '',
            status: '',
            characters: [],
            page: +this.props.match.params.zpage,
            mobileWidth: 425,
            previousButton: '',
            nextButton: ''
        }
    }

    screenWidth = () => {
        return window.innerWidth;
    }

    isDesktopVersion = () => {
        return this.screenWidth() > this.state.mobileWidth;
    }

    componentDidMount() {
        this.setPrevAndNextButtons();
        this.loadData();
        
        window.addEventListener('resize', this.setPrevAndNextButtons);
    }

    setPrevAndNextButtons = () => {
        let isDesktopVersion = this.isDesktopVersion();
        this.setState({
            previousButton: isDesktopVersion ? 'prev page' : '<<',
            nextButton: isDesktopVersion ? 'next page' : '>>'
        })
    }

    loadData = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
        .then(res => {
            const characters = res.data.results;
            this.setState({characters});
            this.setState({maxPage: res.data.info.pages});
        })
    }

    searchBy = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val}, this.filterCharactersRequest);
    }

    filterCharactersRequest = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${this.state.charactername}&status=${this.state.status}`)
            .then(res => {
                const characters = res.data.results;
                this.setState({characters});
                this.setState({maxPage: res.data.info.pages});
            });
    }
    
    nextPage = () => {
        if (this.state.page < this.state.maxPage) {
            this.setState({page: this.state.page += 1}, this.navigateToPage);
        }
        else {
            this.setState({page: 1}, this.navigateToPage);
        }
    }

    previousPage = () => {
        if (this.state.page > 1) {
            this.setState({page: this.state.page -= 1}, this.navigateToPage);
        }
        else {
            this.setState({page: this.state.maxPage}, this.navigateToPage);
        }
    }

    navigateToPage = () => {
        this.props.history.push(`/characters/${this.state.page}`);
        this.props.history.go(0);
    }

    render() {
        return (
            <div>
                <form>
                    <p>Searching character name is: {this.state.charactername}, status is: {this.state.status}</p>
                    <div className="container-inputs-searchbar">
                        <input type='search' name='charactername' onChange={this.searchBy}/>
                        <input type='search' name='status' onChange={this.searchBy}/>
                    </div>
                </form>
                <div className="characters-container">
                    {this.state.characters.map((character) => (
                        <figure key={character.id}>
                                <div className="character-name">{character.name}</div>
                                <div className="character-status" className={character.status}>{character.status}</div>
                                <div className="images-container">
                                    <img src={character.image} />
                                </div>
                            <Link to={`/character/${character.id}`}>
                                <button className="button-character">More info</button>
                            </Link>
                        </figure>
                    ))}
                </div>
                <div className="container-buttons-navigations">
                    <button onClick={() => this.previousPage()} className="button-prev">
                        <span>{this.state.previousButton}</span>
                    </button>
                    <button onClick={() => this.nextPage()} className="button-next">
                        <span>{this.state.nextButton}</span>
                    </button>
                </div>
            </div>
        )
    }
}