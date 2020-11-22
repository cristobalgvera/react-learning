import React, { useState } from 'react';

import styles from './List.module.css';
import itemFadeAnimation from './ItemAnimation.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const List = () => {
    const [items, setItems] = useState([1, 2, 3]);

    const addItemHandler = () => {
        setItems(prevState => prevState.concat(prevState.length + 1));
    };

    const removeItemHandler = ( itemIndex ) => {
        setItems(prevState => prevState.filter(( item, index ) => index !== itemIndex));
    };

    const listItems = items.map(( item, index ) => (
        <CSSTransition
            key={index}
            timeout={300}
            classNames={{ ...itemFadeAnimation }}
        >
            <li className={styles.ListItem} onClick={() => removeItemHandler(index)}>
                {item}
            </li>
        </CSSTransition>
    ));

    return (
        <div>
            <button className="Button" onClick={addItemHandler}>Add Item</button>
            <p>Click Item to Remove.</p>
            <TransitionGroup component={'ul'} className={styles.List}>
                {listItems}
            </TransitionGroup>
        </div>
    );

};

export default List;