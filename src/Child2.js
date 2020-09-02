import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer'
import counterReducer from './CounterReducer'
function Child2() {
    let [state, dispatch] = useReducer(counterReducer, 1)
    return (
        <div>
        <h2>This Is 2nd Child  {state}</h2>
        <button onClick={() => dispatch('INCREMENT')}>Press Me</button>
        </div>
    )
}
export default Child2;