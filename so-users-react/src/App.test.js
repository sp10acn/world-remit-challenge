import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import expect from 'expect';

describe("App", () => {
  it("should render Header and Main", () => {
    const wrapper = shallow(<App/>);
    const app = wrapper.find("App");

    expect(app).toBeTruthy();
  })
});