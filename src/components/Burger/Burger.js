import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import styles from './Burger.module.css';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0)
        transformedIngredients = <h5>Please start adding the ingredients.</h5>;

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;