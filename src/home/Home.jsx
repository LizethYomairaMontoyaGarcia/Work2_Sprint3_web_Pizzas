import React from 'react';
import './home.scss';

const Home = () => {
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
            {/* CARDS */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat, sequi nemo qui nisi quam numquam beatae sapiente, quia quod libero! Doloremque ipsum minus molestiae sunt incidunt quaerat beatae reiciendis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem sed praesentium quas magni perspiciatis ea dolorem odit placeat quia iusto, saepe ut dolorum, ipsum voluptatem qui sunt? Libero, obcaecati!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum, repellat dolore officiis aspernatur quo voluptatem sequi sunt adipisci laborum! Doloribus adipisci repellat asperiores, quos quas nihil reprehenderit sed nesciunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore possimus quas at ipsam optio delectus quasi facilis nesciunt officiis quisquam! Quae corrupti pariatur non a vitae porro laborum magni soluta.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat laborum ut? Rem, dolores libero consectetur, voluptatem amet quis quisquam error, obcaecati reiciendis laborum praesentium necessitatibus? Quibusdam autem assumenda in.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptas numquam distinctio obcaecati esse amet sint tempore quibusdam. Minima unde autem quo aspernatur iste maxime enim repellat delectus itaque officia.
          </div>
        </section>
        <section>
        </section>
      </section>

    </>
  )
}

export default Home