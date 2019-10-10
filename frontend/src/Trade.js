import React, { Component } from "react";
import Form from "./Form";
import Transaction from "./Transactions";

class Trade extends Component{
    state = {
        characters: []
    };

    componentDidMount() {
        /*const url = "http://backend-server-5.southeastasia.azurecontainer.io:8080/client/1/trade";

        fetch(url,{
            method:'POST',
            body: JSON.stringify({this.state.characters}),
            headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    characters: result
                })
            });
            debugger


            
	}*/
    }

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
        this.props.history.push('/transactions');
    }

    render(){
        const { characters } = this.state;
        return(
            <div className="container">
                <h1>Trade Details</h1>
                <hr/>
                
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }

}
export default Trade;