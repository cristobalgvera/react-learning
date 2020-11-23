import React from 'react';

import IngredientForm from './Form/IngredientForm';
import Search from './Search/Search';

const Ingredients = () => (
    <div className="App">
        <IngredientForm/>

        <section>
            <Search/>
            {/* Need to add list here! */}
        </section>
    </div>
);

export default Ingredients;
