import { useReducer } from 'react';
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
            return state - 1;

        case types.reset:
            return 0;

        default:
            return state;
    }
}

const PizzaCounter = () => {
    const [counter, dispach] = useReducer(reducer, 0)

    return (
        <>
           <div className='counter'>
                <button className='counter__buttons' onClick={() => dispach({ type: types.decrement })}>
                    -
                </button>
                <button className='counter__date'>
                    {counter}
                </button>
                < button className='counter__buttons' onClick={() => dispach({ type: types.increment })}>
                    +
                </button>
            </div >
        </>
    )
}

export default PizzaCounter