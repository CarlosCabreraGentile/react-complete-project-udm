import React from 'react';
import './Burger.scss';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props: any) => {
  return (
    <div className='Burger'>
      <BurgerIngredients type='bread-top' />
    </div>
  );
};

export default burger;
