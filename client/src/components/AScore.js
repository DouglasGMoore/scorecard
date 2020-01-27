import React from 'react';

class AScore extends React.Component{
render(){
    return(
        <div>
            <h2>AWAY: {this.props.aScore}</h2>
        </div>
    )
}
}
export default AScore;