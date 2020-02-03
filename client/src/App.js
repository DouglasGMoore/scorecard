import React from 'react';
import './App.css';
import AScore from './components/AScore'
import HScore from './components/HScore'
import APlaque from './components/Aplaque'
import HPlaque from './components/HPlaque'
import AScoring from './components/AScoring'
import HScoring from './components/HScoring'
import Buttons from './components/Buttons'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hName:'Darien',
      aName:'Visitor',
     aScore: 0,
     hScore:0,
     aScoring:[],
     hScoring:[]
    }
  }
  onClick = button => {
    if(button[0] === 'A'){
      if(button[1] === '-'){
        let arr = this.state.aScoring
        let index = arr.indexOf(button[2])
  
        if(index > -1){
          arr.splice(index, 1)
          this.setState({
          aScore: parseInt(this.state.aScore) - parseInt(button[3]),
          aScoring: [...arr]
        }) //end of set state
        }//end of index if
    }else if (button[1]==='+'){
        let arr = [...this.state.aScoring]
        let index = arr.indexOf(button[2])
        if(index > -1){        
          arr.push(button[2])
          this.setState({
            aScore: parseInt(this.state.aScore) + parseInt(button[3]),
            aScoring: arr
          })
      } else {
          arr.push(button[2])
          console.log(arr)
          this.setState({
            aScore: parseInt(this.state.aScore) + parseInt(button[3]),
            aScoring: arr
          })
      }
        }
    }// End of away if
    else {
      if(button[0] === 'H'){
        if(button[1] === '-'){
          let arr = this.state.hScoring
          let index = arr.indexOf(button[2])
    
          if(index > -1){
            arr.splice(index, 1)
            this.setState({
            hScore: parseInt(this.state.hScore) - parseInt(button[3]),
            hScoring: [...arr]
          }) //end of set state
          }//end of index if
      }else if (button[1]==='+'){
          let arr = [...this.state.hScoring]
          let index = arr.indexOf(button[2])
          if(index > -1){        
            arr.push(button[2])
            this.setState({
              hScore: parseInt(this.state.hScore) + parseInt(button[3]),
              hScoring: arr
            })
        } else {
            arr.push(button[2])
            this.setState({
              hScore: parseInt(this.state.hScore) + parseInt(button[3]),
              hScoring: arr
            })
        }
          }

    }
  }
     
}// End of onClick
  render(){
    return (
      <div className="App">
        <div id ='scoreboard'>
          <HPlaque hName={this.state.hName}/>
          <APlaque aName={this.state.aName}/>
        </div>
        <div id='scoring'>
        <div> 
          <div id="homeS"> <HScoring hScoring={this.state.hScoring}/></div>
          <div id = 'home'><HScore hScore={this.state.hScore} /></div>
         </div>
        <div>
        <div id= "awayS"> <AScoring aScoring={this.state.aScoring}/></div>
         <div id = 'away'> <AScore aScore={this.state.aScore} /></div> 
        </div>
        
         
        </div> 
        <Buttons onClick={this.onClick}/>
      </div>
    );
  }
}
export default App;
