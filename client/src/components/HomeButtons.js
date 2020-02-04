import React from 'react'

class HomeButtons extends React.Component{
    render(){
        return(
            <div>
                <div id="homeBut">
                    <button name="H-T2" onClick={e => this.props.onClick(e.target.name)}>T2-</button>
                    <button name="H+T2" onClick={e => this.props.onClick(e.target.name)}>T2+</button><br/>
                    <button name="H-E1" onClick={e => this.props.onClick(e.target.name)}>E1-</button>
                    <button name="H+E1" onClick={e => this.props.onClick(e.target.name)}>E1+</button><br/>
                    <button name="H-R2" onClick={e => this.props.onClick(e.target.name)}>R2-</button>
                    <button name="H+R2" onClick={e => this.props.onClick(e.target.name)}>R2+</button><br/>
                    <button name="H-n2" onClick={e => this.props.onClick(e.target.name)}>N2-</button>
                    <button name="H+n2" onClick={e => this.props.onClick(e.target.name)}>N2+</button><br/>
                    <button name="H-N3" onClick={e => this.props.onClick(e.target.name)}>N3-</button>
                    <button name="H+N3" onClick={e => this.props.onClick(e.target.name)}>N3+</button>
                </div>
            </div>
            

        )
    }
}

export default HomeButtons;     
