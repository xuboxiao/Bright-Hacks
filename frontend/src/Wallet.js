import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
class Wallet extends Component {


  state = {
    data: [],
    line: [],
    dailylineGraph:[],
    totallineGraph:[]
  };

  componentDidMount() {
    const url2 = "http://dbeco-backend.southeastasia.azurecontainer.io:8080/client/1/wallet/history";
    fetch(url2)
      .then(result2 => result2.json())
      .then(result2 => {
        this.setState({
          line: result2
        })
      });
      
  }
  /*componentDidMount()
  {
    const url = "http://backend-server-7.southeastasia.azurecontainer.io:8080/client/1/wallet";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      });
  }*/

  render() {
    /*//let dailyCredit = this.state.data.total_daily_credit_award != undefined ? this.state.data.total_daily_credit_award : 0;
    //let totalCredit = this.state.data.total_credit != undefined ? this.state.data.total_credit : 0;

    this.state.line.map((row, index) => {
      this.state.totallineGraph.push(row.total_credit);
      this.state.dailylineGraph.push(row.total_daily_credit_award);
    })

    /*const bardata = {
      labels: ['Daily Credit', 'Total Credit'],
      datasets: [
        {
          label: 'Credits',
          backgroundColor: 'rgba(24, 98, 29, 1)',
          borderColor: 'rgba(24, 98, 29, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(24, 98, 29, 1)',
          hoverBorderColor: 'rgba(24, 98, 29, 1)',
          data: [dailyCredit, totalCredit]
        }
      ]
    };*/
    
    const lineData = {
      labels: ['02-Oct', '03-Oct', '04-Oct', '05-Oct', '06-Oct', '07-Oct', '08-Oct','09-Oct'],
      datasets: [
        {
          label: 'Total Wallet Balance',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(121, 17, 41, 1)',
          borderColor: 'rgba(121, 17, 41, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(121, 17, 41, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(121, 17, 41, 1)',
          pointHoverBorderColor: 'rgba(121, 17, 41, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [90000, 101000, 112000, 123000, 134000, 145000, 156000, 167000, 178000, 189000]
        },
        {
          label: 'Daily Wallet Credit',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(24, 98, 29, 1)',
          borderColor: 'rgba(24, 98, 29, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(24, 98, 29, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(24, 98, 29, 1)',
          pointHoverBorderColor: 'rgba(24, 98, 29, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 11000, 11000, 11000, 11000, 11000, 11000, 11000]
        }
      ]
    };

    return <div className="container">
      <div>
        <h2>My Wallet Trend</h2>
        <Line
          data={lineData}
          width={50}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      <br/>
      <hr/>
      <br/>
    </div>;
  }
}

export default Wallet;