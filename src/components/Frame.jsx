import React from 'react';
import AgileComponent from './AgileComponent.jsx';

import DataFilter from './DataFilter.jsx'
import R from 'ramda';


export class MyFrame extends AgileComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({ filterText: filterText });
    }
    filterChange(event) {
        this.setState({ filterText: event.target.value });
    } 



    render () {
        const ListItem = name => <li key={name}>{name}</li>
        const List = ({ items })  => <ul>{items.map(item => <li key={item.name}>{item.name}</li>)}</ul>
       
        const Item = todo => <li key={todo.name}>{todo.name}</li>
        const ItemList = this.props.my_data.map(Item);

        return (
             <div> Filter value : {this.state.filterText}
                <form>
                  <input  type="text" placeholder="Search..." 
                          onChange={this.filterChange.bind(this)}    />
                </form>
                Data length : {this.props.my_data.length }
                --------------------------------------------
                {ItemList}
                OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                <List  items={this.props.my_data} />
             </div>
        );
    }
} 

export default MyFrame;
