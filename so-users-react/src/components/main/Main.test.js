import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import expect from 'expect';
import { createMockStore } from 'redux-test-utils';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe("Main", () => {

    it("should render MainComponent successfully", () => {
        const state = {
            stackOverflowUsers: {
                data: {
                    items: [
                        {
                            display_name: "Bob",
                            profile_picture: ""
                        }
                    ]
                }
            }
        };
          const store = createMockStore(state)
          const wrapper = shallowWithStore(<Main />, store);
          expect(wrapper.find("MainComponent")).toBeTruthy();
    });
});