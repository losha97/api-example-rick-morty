import React, { Component } from "react";
import axios from "axios";

export default class Character extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
        .then(res => {
            const character = res.data;
            this.setState({character});
        })
    }

    render() {
        return (
            <div className="character-container">
                {this.state.character && (
                    <figure>
                        <div className="character-name">{this.state.character.name}</div>
                        <div className="character-status" className={this.state.character.status}>{this.state.character.status}</div>
                        <div className="images-container">
                            <img src={this.state.character.image} alt="avatar" />
                        </div>
                        <div className="character-species">{this.state.character.species}</div>
                        <div className="character-gender">{this.state.character.gender}</div>
                        <div className="character-location-name">{this.state.character.location.name}</div>
                    </figure>
                )}
            </div>
        )
    }
}