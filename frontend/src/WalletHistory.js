import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
class WalletHistory extends Component {
    

    state = {
        characters: []
    };



      componentDidMount() {
        
        const url="http://backend-server-6.southeastasia.azurecontainer.io:8080/client/2/wallet/history";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    characters: result
                })
            });

       
    }

      /*render() {
          let dailyCredit = this.state.data.total_daily_credit_award !=undefined ? this.state.data.total_daily_credit_award : 0 ;
          let totalCredit = this.state.data.total_credit !=undefined ? this.state.data.total_credit : 0 ; 
        return <div className="container">
            <h2>Daily Credit: {dailyCredit}</h2>
            <h2>Total Credit: {totalCredit}</h2>
        </div>;
    }*/

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
          //let dailyCredit = this.state.data.total_daily_credit_award !=undefined ? this.state.data.total_daily_credit_award : 0 ;
         //let totalCredit = this.state.data.total_credit !=undefined ? this.state.data.total_credit : 0 ; 
         let characterData = this.state.characters;
          
          const bardata = {
            labels: ['Sep 2019','Oct 2019'],
            datasets: [
              {
                label: 'Wallet Balance',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:[1000,1000]
              },
              {
                label: 'Wallet Balance',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:[4000,2000]
              }
            ]
          };
          debugger
         
        return <div className="container">
            
            <div>
        <h2>My Wallet History</h2>
        <Bar
          data={bardata}
          width={10}
          height={200}

          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      
        </div>;
    }
}


export default WalletHistory;