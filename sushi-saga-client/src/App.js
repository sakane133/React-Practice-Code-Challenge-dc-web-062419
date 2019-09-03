import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0
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
      return this.setState({sushiIndex: this.state.sushiIndex + 4})
    }

    eatSushi = (id) => {
   
      let newSush = this.state.sushis.map(sushi => {
        if(id === sushi.id){
          sushi.eaten = true
          return sushi
         
        }
        else {
          return sushi
        }
      })
      this.setState({sushis: newSush})
    }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.showFour()}
           moreButton={this.showMoreButt}
           eatSushi={this.eatSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;