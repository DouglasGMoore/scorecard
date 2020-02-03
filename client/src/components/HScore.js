import React from 'react';

class HScore extends React.Component{
render(){
    return(
        <div>
           <h1>{this.props.hScore}</h1>
        </div>
    )
}
}
export default HScore;