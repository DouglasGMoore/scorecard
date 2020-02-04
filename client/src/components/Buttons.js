import React from 'react'

class Buttons extends React.Component{
    render(){
        return(
            <div>
                <div id="awayBut">
                    <button name="A-T2" onClick={e => this.props.onClick(e.target.name)}>T2 - </button>
                    <button name="A+T2" onClick={e => this.props.onClick(e.target.name)}>T2 + </button><br />
                    <button name="A-E1" onClick={e => this.props.onClick(e.target.name)}>E1 -</button>
                    <button name="A+E1" onClick={e => this.props.onClick(e.target.name)}>E1+ </button><br />
                    <button name="A-R2" onClick={e => this.props.onClick(e.target.name)}>R2 -</button>
                    <button name="A+R2" onClick={e => this.props.onClick(e.target.name)}>R2+ </button><br />
                    <button name="A-n2" onClick={e => this.props.onClick(e.target.name)}>N2 -</button>
                    <button name="A+n2" onClick={e => this.props.onClick(e.target.name)}>N2+ </button><br />
                    <button name="A-N3" onClick={e => this.props.onClick(e.target.name)}>N3 -</button>
                    <button name="A+N3" onClick={e => this.props.onClick(e.target.name)}>N3+ </button>
                </div>
            
            </div>
            

        )
    }
}

export default Buttons;     
