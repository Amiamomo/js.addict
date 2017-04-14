import React from 'react';
import configureStore from '../store/configureStore.jsx';

export class AgileComponent extends React.Component {
    constructor(props) { 
        super(props); 
        console.log("AgileComponent: constructor : Mouhahaha <----------------");
    } 
    getStore(defaultState) {
        return configureStore();
        //return null;
    }
    render () {
        return (
        this.props.children
        );
    }
} 

export default AgileComponent;
