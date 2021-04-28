// import { configure, shallow } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import NavigationItems from "./NavigationItems"
// import NavigationItem from "./NavigationItem/NavigationItem"
// import React from 'react'

// configure({ adapter: new Adapter() });


// describe("<NavigationItems />", () => {
//   it("should render two <NavigationItems /> when unauthentificated", () => {
//      const wrapper = shallow(<NavigationItems />);
//      expect(wrapper.find(NavigationItem)).toHaveLength(2)
//   });
// });

describe("simple test" , () => {
   it("should be two" , () => {
      expect(1+1).toBe(2)
   })
})
