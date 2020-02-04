import React from 'react'

class PeriodButtons extends React.Component{
    render(){
        return(
            <div>
                <button name="1" onClick={e=>this.props.changeRound(e.target.name)}>RD1</button>
                <button name ='2' onClick={e=>this.props.changeRound(e.target.name)}>RD2</button>
                <button name ='3' onClick={e=>this.props.changeRound(e.target.name)}>RD3</button>
                <button name ='4' onClick={e=>this.props.changeRound(e.target.name)}>OT</button>
            </div>
        )
    }
    }
    export default PeriodButtons;