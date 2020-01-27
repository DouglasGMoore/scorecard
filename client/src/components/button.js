import React from 'react'

class Button extends React.Component{
render(){
    return(
    <div>
        
        <button value='+2' name='T2' onClick={e => this.props.onClick(e.target.name)}>T2</button>
    </div>
    )
}
}
export default Button;