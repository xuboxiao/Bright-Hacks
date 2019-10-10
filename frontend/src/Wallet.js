import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
class Wallet extends Component {
    

    state = {
        data: []
    };

    

      componentDidMount() {
        const url = "http://backend-server-5.southeastasia.azurecontainer.io:8080/client/1/wallet";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
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

    render() {
          let dailyCredit = this.state.data.total_daily_credit_award !=undefined ? this.state.data.total_daily_credit_award : 0 ;
          let totalCredit = this.state.data.total_credit !=undefined ? this.state.data.total_credit : 0 ; 
          
          const bardata = {
            labels: ['Daily Credit', 'Total Credit'],
            datasets: [
              {
                label: 'Credits',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [dailyCredit, totalCredit]
              }
            ]
          };
          debugger
        
        return <div className="container">
            
            <div>
        <h2>My Wallet</h2>
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

export default Wallet;