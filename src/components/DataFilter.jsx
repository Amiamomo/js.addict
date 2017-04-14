import React from 'react';

export class DataFilter extends React.Component {
    constructor(props) { 
        super(props); 
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    } 
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
    render () {
        return (
        <form>
            <input
                type="text"
                placeholder="Search..." 
                onChange={this.handleFilterTextInputChange}
                />
        </form>
        );
    }
} 

export default DataFilter;
