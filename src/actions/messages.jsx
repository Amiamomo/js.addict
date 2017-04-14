// Add the actions here that we created in the previous steps...
const CHANGE_MESSAGE = 'message/CHANGE';

export function changeMessage(message) {
    console.log("changeMessage: "+message);
    return {
        type: CHANGE_MESSAGE,
        my_message: "OXO:"+message
    };
}