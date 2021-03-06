import React, { Component } from 'react';



const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Product Name</th>
                <th>ESG Rating</th>
                <th>Sharpe Ratio</th>
                <th  text-align="center"> Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    debugger
    const rows = props.characterData.map((row, index) => {
        return (
            
            <tr key={index}>
                 <td>{row.product_name}</td>
                <td>{row.esg_rating}</td>
                <td>{row.sharpe_ratio}</td>
                <td ><button type="submit" name="sell" value="Sell" >Sell</button> 
                &nbsp;&nbsp;<button type="submit" name="buy" value="Buy">Buy</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TableSuggestions extends Component {
   
    render() {
        
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default TableSuggestions;