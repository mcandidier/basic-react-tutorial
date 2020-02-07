import React, { Component } from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
};


const TableBody = props => {

    const rows = props.data.map((item, index) => {
        return (
            <tr key="{index}">
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td><button onClick={() => props.removeItem(index)}>delete</button></td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
};


class Table extends Component {
    render() {
        const { data, removeItem } = this.props;
        return (
            <table>
               <TableHeader />
               <TableBody data={data} removeItem={removeItem}/>
            </table>
        )
    }
}

export default Table;
