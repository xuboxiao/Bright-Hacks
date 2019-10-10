import React, {Component} from 'react';
import Select from 'react-select';

class FormOnboardClient extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            clientName: '',
            industry: '',
            
            esg: ''
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
        const {  clientName,industry, esg } = this.state; 

        const techCompanies = [
            { label: "Rubber Company", value: 1 },
            { label: "Mining Company", value: 2 },
            { label: "Oil Company", value: 3 },
            { label: "Solar Company", value: 4 },
            { label: "Plantation Company", value: 5 },
          ];

        return (
            <form Submit={this.onFormSubmit} >
                
                <div class="form-group">
                <label>Client Name</label>
                <input 
                    type="text" 
                    name="clientName" 
                    class="input"
                    value={clientName} 
                    
                    onChange={this.handleChange} />
                    <label>Industry</label>
                <Select options={ techCompanies } name="industry"  class="form-control"
                    toggleItem={this.toggleSelected}/>
                   <div class="form-check-inline">
                   <label>ESG Compliant&nbsp;&nbsp;</label>
                    
                    <input 
                    type="checkbox" class="chkboxStyle"
                    name="esg" 
                    value={esg} 
                    onChange={this.handleChange} />Yes   
                      <input 
                    type="checkbox" 
                    name="esg" 
                    class="form-check-input" checked
                    value={esg} 
                    onChange={this.handleChange} />No
                   </div>
                   <div class="formSubmit">
                <button type="submit" class="btn btn-success">Submit</button>
                </div>
                </div>
            </form>
        );
    }
}

export default   FormOnboardClient;