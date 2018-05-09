import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import {HomeContainer} from "../homeContainer";
import {Home} from "../home"

Enzyme.configure({ adapter: new Adapter() });

describe("HomeContainer", () => {
    it("renders the Home component with the correct props", () => {
        const wrapper = shallow(<HomeContainer/>);
        expect(wrapper.find(Home)).toHaveLength(1)
    })
});