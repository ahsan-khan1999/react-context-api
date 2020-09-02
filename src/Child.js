import React, { useContext } from 'react'
import CounterContext from './CounterContext';
function Child() {
    const count = useContext(CounterContext)
    return (
        <div>

            <h1>Hello I am In Child {count[0]}</h1>
            <button onClick ={() => {count[1](++count[0])}}>Press Me</button>
        </div>
    )
}
export default Child