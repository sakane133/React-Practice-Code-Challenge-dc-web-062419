import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    budget: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiArr => {
      let sushiInfo =  sushiArr.map(sushi =>{
        sushi.eaten = false
        return sushi })
      this.setState({sushis: sushiInfo})  
        })
      }

   showFour = () => {
     return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    }

    showMoreButt = () => {
      if(this.state.sushiIndex + 4 < this.state.sushis.length){
      return this.setState({sushiIndex: this.state.sushiIndex + 4})
      }
      else{
        return this.setState({sushiIndex: 0})
      }
    }

    eatSushi = (obj) => {
      let newSush = this.state.sushis.map(sushi => {
        if(obj === sushi){
          sushi.eaten = true
          if(this.state.budget >= obj.price ){
          this.setState({
        budget: this.state.budget - sushi.price
      })
      return sushi 
    }
    else{
      alert("not enough money")
    }
        }
      })
    }

    emptyPlates = () => {
      return this.state.sushis.filter(sush => sush.eaten)
    }

  render(){
    return (
      <div className="app">
        <SushiContainer  sushis={this.showFour()}
           moreButton={this.showMoreButt}
           eatSushi={this.eatSushi}
           budget={this.state.budget}
           />
        <Table 
        emptyPlates={this.emptyPlates()}
        sushi={this.state.sushis}
        budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;