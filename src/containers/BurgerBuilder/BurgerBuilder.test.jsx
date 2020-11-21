import React from 'react';
import { BurgerBuilder } from './BurgerBuilder';
import { configure, shallow } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({ adapter: new ReactSeventeenAdapter() });

describe('<BurgerBuilder />', function () {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder reduxState reduxActions/>);
    });

    it('should render <BuildControls /> when receiving ingredients', function () {
        wrapper.setProps({ reduxState: { ingredients: { salad: 0 } } });
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});