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
     aScore: 2,
     hScore:13,
     aScoring:['T', 'T', 'T', 'T'],
     hScoring:['E1']
    }
  }
  onClick = button => {
    if(button[0] === '-'){
      let arr = this.state.aScoring
      let index = arr.indexOf(button[1])

    if(index > -1){
      arr.splice(index, 1)
      this.setState({
      aScore: parseInt(this.state.aScore) - parseInt(button[2]),
      aScoring: [...arr]
    }) 
    }
  } 
}
  render(){
    return (
      <div className="App">
        <div id ='scoreboard'>
          <HPlaque hName={this.state.hName}/>
          <div id = 'home'><HScore hScore={this.state.hScore} /></div>
          <div id = 'away'> <AScore aScore={this.state.aScore} /></div> 
          <APlaque aName={this.state.aName}/>
        </div>
        <div id='scoring'>
          <HScoring hScoring={this.state.hScoring}/>
          <AScoring aScoring={this.state.aScoring}/>
        </div> 
        <Buttons onClick={this.onClick}/>
      </div>
    );
  }
}
export default App;
