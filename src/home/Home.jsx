import React from 'react';
import './home.scss';

export const Home = () => {
  return (
    <>
      <section className='section__homePrincipal'>
        <section className='section__contenidoHome'>
          <div className='section__pizzasDisponibles'>
            <h1>Pizzas disponibles</h1>
            <a href="#">Ver todas</a>
          </div>
          <div className='section__cupones'>
            <div className='section__scrollCupones'>
              <button className='section__botonesCupones'>
                <div className='section__cuponBase'>
                <p>Cupón para Frontends</p>
                <h1>45% OFF</h1>
                </div>
              </button>

              <button className='section__botonesCupones'>
              <div className='section__cuponBase'>
                <p>Cupón Pizza CSS</p>
                <h1>25% OFF</h1>
                </div>
              </button>

              <button className='section__botonesCupones'>
              <div className='section__cuponBase'>
                <p>Cupón para Frontends</p>
                <h1>45% OFF</h1>
                </div>
              </button>
            </div>
          </div>
          <div className='section__cardsPizzas'>

          </div>
        </section>
        <section>
        </section>
      </section>

    </>
  )
}
