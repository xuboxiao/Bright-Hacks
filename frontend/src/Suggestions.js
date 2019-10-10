import React, { Component } from "react";
import TableSuggestions from "./TableSuggestions"

class Suggestions extends Component{
    state = {
        characters: []
    };

      componentDidMount() {
        const url = "http://dbeco-backend.southeastasia.azurecontainer.io:8080/products";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    characters: result
                })
            });
            debugger
    }

    /*removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }*/

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
        
    }

    /*render(){
        /*const characters = [
            {
              asset: 'Rubber Company',
              quantity: '300',
              date:'2019-01-20'
            },
            {
                asset: 'Solar Company',
                quantity: '50',
                date:'2019-02-12'
            },
            {
                asset: 'Oil Company',
                quantity: '100',
                date:'2019-03-14'
            },
            {
                asset: 'Plantation Company',
                quantity: '40',
                date:'2019-04-30'
            },
            {
                asset: 'Mining Company',
                quantity: '120',
                date:'2019-05-21'
            },
          ]
          

        const characters = characters.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });
        /*const { characters } = this.state.characters;
        return(
            <div className="container">
                <h1>Transactions Summary</h1>
                <br/>
                <Table
                    characterData={characters}
                />
            </div>
        );
    }*/

    /*render() {
        const { characters } = this.state;
        debugger
        const result = characters.map((entry, index) => {
            console.log(entry);
            //return <li key={index}>{entry}</li>;
            //return <li key={characters.product_name}</li>;
        });

        return <div className="container"><ul>{characters}</ul></div>;
    }*/

    render() {
        return(
            <div className="container">
                <h2>Product Offerings</h2>
                <br/>
                <TableSuggestions
                    characterData={this.state.characters}
                />
            </div>
        );
    }

}
export default Suggestions;