import React from 'react';
import './App.css';
import AScore from './components/AScore'
import HScore from './components/HScore'
import APlaque from './components/Aplaque'
import HPlaque from './components/HPlaque'
import AScoring from './components/AScoring'
import HScoring from './components/HScoring'
import Buttons from './components/Buttons'
import HomeButtons from './components/HomeButtons'
import PeriodButtons from './components/PeriodButtons'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hName:'Darien',
      aName:'Visitor',
      round: 1,
     aScore:0,
     hScore:0,
     a1:[],
     a2:[],
     a3:[],
     a4:[],
     h1:[],
     h2:[],
     h3:[],
     h4:[]
    }
  }
// Sets the round
changeRound= name =>{
  console.log("called", name)
  this.setState({
    round: name 
  })
}
// Uses the button name to place pts and letter in appropriate roun and contestant box
onClick = button => {
    let team = button[0].toLowerCase();
    let score = [team]+"Score";
    let move = button[2];
    let pts = button[3];
    let pom = button[1];
    let teamr = team+this.state.round
    let arr = [...this.state[teamr]]
    let index = arr.indexOf(move)

    if(pom === '-'){
        if(index > -1){// Eliminates possibilty of removing a non existatnt move
            arr.splice(index, 1)
            this.setState({
            [score]: parseInt(this.state[score]) - parseInt(pts),
            [teamr]: arr
            }) //end of set state
          }//end of index if
      }// End of '-' if
    else if (pom==='+'){
        if(index > -1){        
            arr.push(move)
            this.setState({
            [score]: parseInt(this.state[score]) + parseInt(pts),
            [teamr]: arr
          })//End of setState
          } // End of index if
        else {
          arr.push(move)
          // console.log(arr)
          this.setState({
            [score]: parseInt(this.state[score]) + parseInt(pts),
            [teamr]: arr
          })// End of setstate
          }// End of '+' else 
      }// End of '+' if
}// End of onClick
  render(){
    return (
      <div className="App">
        <div id ='scoreboard'>
        <div className = 'home'><HScore hScore={this.state.hScore} /></div>
        <HPlaque hName={this.state.hName}/>
        <APlaque aName={this.state.aName}/>
        <div className = 'away'> <AScore aScore={this.state.aScore} /></div>
      </div>
      <div id='scoring'>
        <HomeButtons onClick={this.onClick} />
        <div> 
          <div className="homeS"><h1>RD1: </h1><HScoring hScoring={this.state.h1}/></div>
          <div className="homeS"><h1>RD2: </h1><HScoring hScoring={this.state.h2}/></div>
          <div className="homeS"><h1>RD3: </h1><HScoring hScoring={this.state.h3}/></div>
          <div className="homeS"><h1>OT: </h1><HScoring hScoring={this.state.h4}/></div>
        </div>
        <div>
          <div className= "awayS"><h1>RD1</h1><AScoring aScoring={this.state.a1}/></div>
          <div className= "awayS"><h1>RD2</h1><AScoring aScoring={this.state.a2}/></div>
          <div className= "awayS"><h1>RD3</h1><AScoring aScoring={this.state.a3}/></div>
          <div className= "awayS"><h1>OT</h1><AScoring aScoring={this.state.a4}/></div>
        </div>
        <Buttons onClick={this.onClick}/>
        </div> 
       <PeriodButtons changeRound={this.changeRound}/>
      </div>
    );
  }// Enf of render
}
export default App;
