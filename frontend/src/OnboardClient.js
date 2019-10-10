import React, { Component } from "react";
import FormOnboardClient from "./FormOnboardClient"
      
class OnboardClient extends Component{
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
        const { characters } = this.state;
        return(
            <div className="container">
                <h2>Onboard Client</h2>

                <FormOnboardClient handleSubmit={this.handleSubmit} />
          </div>
        );
    }

}
export default OnboardClient;