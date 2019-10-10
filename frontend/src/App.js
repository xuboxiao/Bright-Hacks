import React from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Wallet from "./Wallet";
import Holdings from "./Holdings";
import Transactions from "./Transactions";
import Trade from "./Trade";
import Suggestions from "./Suggestions";
import WalletHistory from "./WalletHistory";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
       
        <HashRouter>
          <ul className="header">
          <li><img src="./dbecologo.jpg" padding="10px"  height="80" width="80"/></li>
            <li><NavLink to="/walletHistory">Wallet</NavLink></li>
            <li><NavLink to="/holdings">Holdings</NavLink></li>
            <li><NavLink to="/transactions">Transactions</NavLink></li>
            <li><NavLink to="/suggestions">Trading Suggestions</NavLink></li>
            <li><NavLink to="/trade">Trade</NavLink></li>
          
            <li><NavLink to="/#">Logout</NavLink></li>
          </ul>
          <div className="content" >
            <Route path="/walletHistory" component={WalletHistory} />
            <Route path="/holdings" component={Holdings} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/trade" component={Trade} />
            <Route path="/suggestions" component={Suggestions} />
          </div>
        </HashRouter>
        <div id="footerContainer"  class="w3-row-padding w3-margin-bottom ">
    <footer class="page-footer  fixed-bottom text-center footerContainer">
    &copy;Deutsche Bank Singapore Hackathon, 2019
   <a href="https://twitter.com" target="_blank" class="fa fa-twitter"></a>
   <a href="https://google.com" class="fa fa-google"></a>
   <a href="https://linkedin.com" class="fa fa-linkedin"></a>

</footer>
</div>
      </div>
      
    );
  }
};
