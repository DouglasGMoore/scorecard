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
                {/* <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/> */}

            </div>
            </div>
            

        )
    }
}

export default HomeButtons;     
