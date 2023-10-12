import React from 'react'

function HocCallCompo(props) {
  return (
    <div className='firstHoc'>
      <h4>{props.value}</h4>
    </div>
  )
}

export default HocCallCompo

function HocCallMiddleCompo(props) {
    return (
      <div className='SecondHoc'>
        <h4>{props.value}</h4>
      </div>
    )
  }
  
  export {HocCallMiddleCompo}

  function HocCallLastCompo(props) {
    return (
      <div className='LastHoc'>
        <h4>{props.value}</h4>
      </div>
    )
  }

  export {HocCallLastCompo}
