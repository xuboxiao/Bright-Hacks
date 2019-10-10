import React, {Component} from 'react';
import Select from 'react-select';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            asset: '',
            qty: '',
            price: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    toggleSelected(id, key){
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
          [key]: temp
        })
      }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { asset, qty, price } = this.state; 

        const techCompanies = [
            { label: "Rubber Company", value: 1 },
            { label: "Mining Company", value: 2 },
            { label: "Oil Company", value: 3 },
            { label: "Solar Company", value: 4 },
            { label: "Plantation Company", value: 5 },
          ];

        return (
            
            <form  onSubmit={this.onFormSubmit}>
              


                <label>Asset</label>
                
                <Select  options={ techCompanies } name="asset" id="form-control resizeformc" 
                    toggleItem={this.toggleSelected}/>
                  
                <label>Quantity</label>
                <input 
                    type="text" 
                    name="qty" 
                    class="input"
                    value={qty} 
                    onChange={this.handleChange} />
                   

<label>ESG(MSCI) Rating</label>
                    
                    <input 
                        type="text" 
                        name="price" 
                        class="input"
                        value={price} 
                        onChange={this.handleChange} />
                     <p></p>
                <button type="submit" id="formSubmit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;