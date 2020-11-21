import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavigationItems } from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import { ORDERS } from '../../Routes/path/path';

configure({ adapter: new ReactSeventeenAdapter() });

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems reduxState reduxActions/>);
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({ reduxState: { localId: true } });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should not render <NavigationItem /> elements with orders route if not authenticated', () => {
        expect(!wrapper.contains(
            <NavigationItem link={ORDERS}>
                Orders
            </NavigationItem>),
        ).toBeTruthy();
    });

});