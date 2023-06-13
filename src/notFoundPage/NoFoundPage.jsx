import React, { useContext } from 'react'
import './noFoundPage.scss'
import { PizzaContext } from '../useContex/PizzaContext';

const NoFoundPage = () => {
  const { toHome
} = useContext(PizzaContext);

  return (
    <>
    <div className='contenido'>
    <h1>¡Ups!</h1>
    <h3> Parece que alguien se comió la página :c</h3>
    </div>
       <div className="pizza">
      {[...Array(13)].map((_, i) => (
        <div className="slice" key={i} style={{ transform: `rotate(${-i * 27.75}deg)`, animationDelay: `${-i / 16}s` }}>
          <div className="crust"></div>
          <div className="topping"></div>
        </div>
      ))}
    </div>
    <div className='contenidoFinal'>
      <h2>Pero no te preocupes, hay muchas más pizzas deliciosas en nuestro menú principal.</h2>
      <button onClick={toHome}>Página principal</button>
    </div>
    </>
  )
}

export default NoFoundPage