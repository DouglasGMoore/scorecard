import React from 'react';

class HScore extends React.Component{
render(){
    return(
        <div>
           <h2> HOME: {this.props.hScore}</h2>
        </div>
    )
}
}
export default HScore;