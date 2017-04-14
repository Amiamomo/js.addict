import React            from 'react';
import AgileComponent   from './components/AgileComponent.jsx';
import MyFrame          from './components/Frame.jsx';
import {FancyAlerter}   from './components/FancyAlerter.jsx';



import { EMEAConfigDataService,MyDataService,MY_DATA} from './components/DataService.jsx';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import R from 'ramda';
import configureStore from './store/configureStore.jsx';

import {addTodo} from './actions/todo.jsx'
import {changeMessage} from './actions/messages.jsx'
import * as rr_state from './state/default_state.jsx';
import {mapStateToProps, mapDispatchToProps}  from './state/react_redux_map.jsx';

 //var store = createStore(todoApp, defaultState);

const store = configureStore(rr_state.defaultState);

// https://www.robinwieruch.de/tips-to-learn-react-redux/

const ADD_TODO = 'todo/ADD_TODO';

class App extends AgileComponent {
  constructor(props) { 
    super(props); 
    //this.getStore({});
    this.state = {
        name: ''
    };
    console.log(EMEAConfigDataService.getGEMs());
    console.log("-----------------------------------");
  } 
  

// https://daveceddia.com/ajax-requests-in-react/
    componentDidMount() { 
        console.log("App did moooount");
        console.log(R.add(2, 3));
    }
    onClick() { 
        console.log('onClick: >>>>');        
        store.dispatch(addTodo("test"));
        console.log('onClick:  store.getState'); 
        console.log(store.getState())
   } 

//<FancyAlerter fancyInfo='indeeed'></FancyAlerter>

   render() {
      var myStyle = {
         fontSize: 30,
         color: '#FF0000'
      }
      const Title = ({ onClick, children }) => <h1  onClick={onClick} type="button">{children}</h1>;
      const FancyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FancyAlerter)
      return (
         <Provider store={configureStore(rr_state.defaultState)}>
            <div>
              <FancyButtonContainer></FancyButtonContainer>
              <Title onClick={this.onClick.bind(this)}>Mon titre </Title>
              <h1 style = {myStyle} onClick={this.onClick.bind(this)}>Hello World!!! </h1>
              <MyFrame my_data={MyDataService.getData()}></MyFrame>

            </div>
         </Provider>
      );
   }
}

export default App;
