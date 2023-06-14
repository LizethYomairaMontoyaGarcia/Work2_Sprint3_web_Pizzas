import React from 'react'
import PizzaCounter from '../components/pizzaCounter/PizzaCounter'
import "./styleDetails.scss"
import ButtonReview from '../components/buttons/ButtonReview'
import ButtonShopping from '../components/buttons/ButtonShopping'
import ButtonPay from '../components/buttons/ButtonPay'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cris from "../assets/cris.jpg"
import { NavLink } from 'react-router-dom'

const Details = () => {

  const infoPizza = JSON.parse(sessionStorage.getItem('selectedPizza'));

  return (
    <>
      <section className='details'>
        <Carousel className='details__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
          <div>
            <img src={infoPizza.img1} alt="img1" />
            <section className="details__link-allPizzas">
              <NavLink  id="namePizza">Todas las Pizzas</NavLink>           
            </section>
          <div className='details__caruselGeneral__overlay'></div>
          </div>
          <div>
            <img src={infoPizza.img2} alt="img2" />
            <div className='details__caruselGeneral__overlay'></div>
          </div>
          <div>
            <img src={infoPizza.img3} alt="img3" />
            <div className='details__caruselGeneral__overlay'></div>
          </div>
        </Carousel>
      </section>
      <section className='details__info'>
        <span className='details__title'>{infoPizza.name}</span>
        <div className='details__container-buttons'>
          <button className='button-price'>
            <span>{infoPizza.price}</span>
            <span>MXN</span>
          </button>
          <ButtonReview />
        </div>
        <div className='details__container-description'>
          <span className='details__subtitle-description'>Descripcion</span>
          <p className='details__paragraph-description'>{infoPizza.desc}</p>
        </div>
        <div className='details__comments'>
          <div className='details__comments-photo' >
            <img className='details__img-photo' src={Cris} alt="p" />
          </div>
          <div className='details__comments-info'>
            <div className='details__container-name'>
              <span className='details__comentary-name'>Marcos Toledo</span>
              <span className='details__comentary-date'>4d ago</span>
            </div>

            <div className='details__container-favorites'>
              <svg width={18} height={18} fill='orange' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
              <svg width={18} height={18} fill='orange' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
              <svg width={18} height={18} fill='orange' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fill-rule="nonzero" /></svg>
            </div>
            <div className='details__comentary'>
              <span>De las mejores pizzs que he probado, recomendada.</span>
            </div>
          </div>
        </div>
      </section>
      <section className='details__counter'>
        <PizzaCounter />
        <div className='details__counter-pay'>
          <ButtonShopping />
          <ButtonPay />
        </div>
      </section>
    
        </>
  )
}

export default Details