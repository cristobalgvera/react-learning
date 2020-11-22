import React from 'react';
import styles from './PizzaImage.css';
import pizzaImage from '../../assets/pizza.jpg';

const PizzaImage = () => (
    <div className={styles.PizzaImage}>
        <img src={pizzaImage} className={styles.Image} alt={'Pizza'}/>
    </div>
);

export default PizzaImage;