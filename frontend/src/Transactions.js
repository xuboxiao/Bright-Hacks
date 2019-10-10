import React, { Component } from "react";
import Table from "./Table"

class Transactions extends Component{
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render(){
        const characters = [
            {
                date:'2019-01-20',
              asset: 'Rubber Company',
              asset_category:'ESG',
              quantity: '300'
              
            },
            {
                date:'2019-02-12',
                asset: 'Solar Company',
                asset_category:'ESG',
                quantity: 50
                
            },
            {
                date:'2019-03-14',
                asset: 'Oil Company',
                asset_category:'ESG',
                quantity: '100'
               
            },
            {
                date:'2019-04-30',
                asset: 'Plantation Company',
                asset_category:'ESG',
                quantity: '40'
            },
            {
                date:'2019-05-21',
                asset: 'Mining Company',
                asset_category:'Neutral',
                quantity: '120',
                
            },
          ]
        //const { characters } = this.state;
        return(
            <div className="container">
                <h2>Transactions History</h2>
                <br/>
                <Table
                    characterData={characters}
                />
            </div>
        );
    }

}
export default Transactions;