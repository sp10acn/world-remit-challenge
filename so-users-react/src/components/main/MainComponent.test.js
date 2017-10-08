import React from 'react';
import MainComponent from './MainComponent';
import { shallow } from 'enzyme';
import expect from 'expect';

describe("MainComponent", () => {
    it("should display error", () => {
        let wrapper = shallow(<MainComponent />);
        expect(wrapper.find("CircularProgress").length).toEqual(0);
        expect(wrapper.find("List").length).toEqual(0);
        expect(wrapper.find("ListItem").length).toEqual(0);
        expect(wrapper.find("h3").length).toEqual(1);
    });

    it("should display error", () => {
        let wrapper = shallow(<MainComponent error={true} errorMessage={"ERROR"} loading={true} users={[]} />);
        expect(wrapper.find("CircularProgress").length).toEqual(0);
        expect(wrapper.find("List").length).toEqual(0);
        expect(wrapper.find("ListItem").length).toEqual(0);
        expect(wrapper.find("h3").length).toEqual(1);
    });

    it("should display loading", () => {
        let wrapper = shallow(<MainComponent loading={true} users={undefined}/>);
        expect(wrapper.find("CircularProgress").length).toEqual(1);
        expect(wrapper.find("List").length).toEqual(0);
        expect(wrapper.find("ListItem").length).toEqual(0);
        expect(wrapper.find("h3").length).toEqual(0);
    });

    it("should display users", () => {
        const users = [
            {
                name: "Bob",
                avatar: ""
            },
            {
                name: "Bill",
                avatar: ""
            },
            {
                name: "John",
                avatar: ""
            }
        ];
        let wrapper = shallow(<MainComponent loading={false} users={users}/>);
        expect(wrapper.find("CircularProgress").length).toEqual(0);
        expect(wrapper.find("List").length).toEqual(1);
        expect(wrapper.find("ListItem").length).toEqual(3);
        expect(wrapper.find("h3").length).toEqual(0);
    });
});