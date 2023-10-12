import React from 'react'
import './App.css';
import PureCompo from './Component/PureCompo';
import HocCallCompo, { HocCallLastCompo, HocCallMiddleCompo } from './HocCallCompo';
import ParentHOC from './Component/ParentHOC';

function App() {
  return (
    <>
      <PureCompo />
      <div>
        <h1 className='center'>This is HighOrderComponent</h1>
        <h2>Q.What is HighOrderComponent?</h2>
        <h3>ANS:</h3>
        <h4>
          <ul className='orderList'>
            <li>HighOrderComponent is a function that take Component and some
              additional Functionality and return a new Component.
            </li>
            <li>In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.</li>
            <li>HOCs allow you to add additional functionality to a component without modifying the component's code.</li>
            <li>This makes them a flexible and reusable way to add functionality to your components.</li>
          </ul>
        </h4>
        <h2>Q. Benefit of HighOrderComponent?</h2>
        <h4>
          <ol className='orderList'>
            <li>Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.</li>
            <li>Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.</li>
            <li>Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.</li>
            <li>Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.</li>
            <li>Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.</li>
          </ol>
        </h4>
        <HocCallCompo value={<ParentHOC />} />
        <HocCallMiddleCompo value={<ParentHOC />} />
        <HocCallLastCompo value={<ParentHOC />} />
      </div>
    </>
  )
}

export default App
