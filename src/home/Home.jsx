import React from 'react';
import './home.scss';
import InfoSliderProducts from '../sliderProducts/InfoSliderProducts';

const Home = () => {
  return (
    <div className="section__homePrincipal">
      <section className='section__contenidoHome'>
        <div className='section__pizzasDisponibles'>
          <h1>Pizzas disponibles</h1>
          <a href="#">Ver todas</a>
        </div>
        <div className='section__cupones'>
          <div className='section__scrollCupones'>
            <button className='section__botonesCupones'>
              <div className='section__cuponBase'>
                <h5>Cupón para Frontends</h5>
                <h1>45% OFF</h1>
              </div>
            </button>

            <button className='section__botonesCupones'>
              <div className='section__cuponBase'>
                <h5>Cupón Pizza CSS</h5>
                <h1>25% OFF</h1>
              </div>
            </button>

            <button className='section__botonesCupones'>
              <div className='section__cuponBase'>
                <h5> Cupón para Frontends</h5>
                <h1>45% OFF</h1>
              </div>
            </button>
          </div>
        </div>
        <div className='section__cardsPizzas'>
          {/* CARDS */}
          <InfoSliderProducts />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Home