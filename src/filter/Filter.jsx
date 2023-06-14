// import React, { useEffect, useContext } from 'react'
// import "../details/styleDetails.scss"
// import {getPizzas} from '../services/getPizzas';
// import { PizzaContext } from '../useContex/PizzaContext';

// const Filter = () => {

//   const{
//     pizzas,
//     setPizzas
//   } = useContext(PizzaContext);

//   useEffect(() => {
//     const axiosData = async () => {
//       try {
//         const data = await getPizzas();
//         setPizzas(data);
//         console.log("informacion de set pizzas en useEfect: ", pizzas);
//       } catch (error) {
//         console.error('Error al obtener los datos de las pizzas:', error);
//       }
//     };
//     axiosData();
//   }, []);

 
// return (
//   <>
//     <div>
//       <section className='details__galery'>
//         <img className='details__img-galery' src="#" alt="pizzas" />
//         <div className='details__Return'>
//           <img src="#" alt="icon" />
//           <span>Todas las pizzas</span>
//         </div>
//       </section>
//     </div>
//   </>
// )
// }

// export default Filter