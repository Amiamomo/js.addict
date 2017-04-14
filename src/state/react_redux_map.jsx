import {addTodo} from '../actions/todo.jsx'
import {changeMessage} from '../actions/messages.jsx'


export function mapStateToProps(state, ownProps) {
    return {
        fancyInfo: "mapStateToProps:" +state.my_message
    }
}

export function mapDispatchToProps(dispatch, ownProps) {
    return({
        sendTheAlert: () => {console.log("MAAAAAAAAAAAAAAAAAAAAAAAAAAAA"); 
                             dispatch(changeMessage("Moo agoulap"));}
    })
}
