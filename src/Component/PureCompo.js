import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    console.log("This is Render Method...");
    return (
      <>
        <h1 className='center'>This is PureComponent</h1>
        <h2>Q.What is Pure Component?</h2>
        <h3>ANS:-</h3>
        <h4>
          <ul className='UnOrderList'>
            <li>Pure Component is a function it return same output as pass as same input argument.</li>
            <li>It don't depend any input argument.</li>
            <li>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.</li>
            <li>To skip re-rendering a class component for same props and state, extend PureComponent instead of Component.</li>
          </ul>
        </h4>
        <h2>Q.Feature of Pure Component?</h2>
        <h4>
          <ul className='UnOrderList'>
            <li>They prevent the re-rendering if props and state are the same.</li>
            <li>They handle shouldComponentUpdate implicitly
              Increases performance.</li>
            <li>Shallow comparison of state and props.</li>
          </ul>
        </h4>
        <div className='btnArea'>
        <h2>Counter Value:{this.state.count}</h2>
        <button className='btn' onClick={(() => this.setState({ count: 5 }))}>ChangeValue</button>
        </div>
        <hr className='hrLine'/>
      </>
    )
  }
}
export default PureCompo;
