import { useEffect, useReducer } from 'react';
import "./stylePizzaCounter.scss";

const types = {
    increment: 'increment',
    decrement: 'decrement',
    reset: 'reset',
}
const reducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return state + 1;
        case types.decrement:
            return state>0 ? state - 1 : state = 0;

        case types.reset:
            return 0;

        default:
            return state;
    }
}

const PizzaCounter = () => {
    const [counter, dispatch] = useReducer(reducer, 0)
    
    useEffect(() => {
        sessionStorage.setItem('infoCounter', JSON.stringify(counter));
      }, [counter]);
     
    return (
        <>
           <div className='counter'>
                <button className='counter__buttons' onClick={() => dispatch({ type: types.decrement })}>
                    -
                </button>
                <button className='counter__date'>
                    {counter}
                </button>
                < button className='counter__buttons' onClick={() => dispatch({ type: types.increment })}>
                    +
                </button>
            </div >
        </>
    )
}

export default PizzaCounter