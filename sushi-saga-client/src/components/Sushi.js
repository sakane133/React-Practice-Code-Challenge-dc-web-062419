import React from 'react'

const Sushi = (props) => {
  const {id, name, price, img_url, eaten} = props.sushi
  return (
    <div className="sushi">
      <div className="plate">
  {eaten ? null : <img src={img_url} width="100%"  onClick={() => props.eatSushi(props.sushi)}/>}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi