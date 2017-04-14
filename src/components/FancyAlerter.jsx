import React from 'react';

const Button = ({ onClick, children }) =>
   <button onClick={onClick} type="button">{children}</button>;

export class FancyAlerter extends React.Component {
    // constructor() { 
    //     super(); 
    // } 
    sendAlert  () {
        console.log("FancyAlerter:sendAlert click");
        console.log(this.props);
        this.props.sendTheAlert();
    }

    render() {
        return(
            <div>
             Fancy Alert is {this.props.fancyInfo}
             <Button onClick={this.sendAlert.bind(this)}>aaa</Button>
            </div>
        );
    } 
}



export default  FancyAlerter;