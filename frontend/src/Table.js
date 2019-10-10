import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Trade Type</th>
                <th>Product Name</th>
                <th>Units</th>
                <th>Transaction Date</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    debugger
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.transaction_id}</td>
                <td>{row.trade_type}</td>
                <td>{row.product_name}</td>
                <td>{row.units_traded}</td>
                <td>{row.time_stamp}</td>
            </tr>
        );
    });
    debugger

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
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

export default Table;