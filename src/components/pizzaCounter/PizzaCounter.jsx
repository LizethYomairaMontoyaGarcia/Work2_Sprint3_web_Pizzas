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
           <section className='counter'>
           <div className='counter__container'>
                <button className='counter__buttons' onClick={() => dispach({ type: types.decrement })}>
                    -
                </button>
                <button className='counter__buttons'>
                    {counter}
                </button>
                <button className='counter__buttons' onClick={() => dispach({ type: types.increment })}>
                    +
                </button>
            </div >
            <div>
                <button className='counter__buy'>
                    <figure>
                        <img src="#" alt="btn-buy" />
                    </figure>
                </button>
            </div>
            <div>
                <button className='counter__btnPay'>
                    Pagar
                </button>
            </div>
            
           </section>

        </>
    )
}

export default PizzaCounter