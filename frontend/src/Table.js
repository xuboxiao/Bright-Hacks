import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr> 
                <th>Transaction Date</th>
                <th>Asset</th>
                <th>Asset Category</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.date}</td>
                <td>{row.asset}</td>
                <td>{row.asset_category}</td>
                <td>{row.quantity}</td>
                
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        
        const { characterData } = this.props;

        return (
            <table class="table table-striped">
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        );
    }
}

export default Table;