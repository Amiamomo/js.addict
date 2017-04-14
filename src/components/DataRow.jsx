// test : not used anymor
import React from 'react';

export class DataRow extends React.Component {
    constructor() { 
        super(); 
    } 
 
    render () {
        return (
        <div> Datarow:{this.props.data_row.length } - {this.props.data_row.name}</div>
        );
    }
} 

export default DataRow;
