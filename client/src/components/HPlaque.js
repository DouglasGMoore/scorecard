import React from 'react';

class HPlaque extends React.Component{
render(){
    return(
        <div>
            <h1>{this.props.hName}</h1>
        </div>
    )
}
}
export default HPlaque;