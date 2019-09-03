import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
  <div className="belt">
    {
    props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} price={this.emptyPrice}/>)
    }
    <MoreButton moreButton={props.moreButton}/>
      </div>
  )
}

export default SushiContainer