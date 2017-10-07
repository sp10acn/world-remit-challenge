import expect from 'expect';
import { startGetSOUsers, fulfillGetSOUsers, rejectGetSOUsers, getSOUsers } from './stack-overflow';
import moxios from 'moxios';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'


describe("Stack Overflow actions", () => {

    beforeEach(function () {
        moxios.install(axios);
    });

    afterEach(function () {
        moxios.uninstall(axios);
    });
  
    it("should return fetch started", () => {
        const expected = {
            type: "GET_SO_USERS_STARTED"
        };
        expect(startGetSOUsers()).toEqual(expected);
    });

    it("should return fetch fulfilled", () => {
        const expPayload = {
            test: "test"
        };
        const expected = {
            type: "GET_SO_USERS_FULFILLED",
            payload: expPayload
        }

        expect(fulfillGetSOUsers(expPayload)).toEqual(expected);
    });

    it("should return fetch rejected", () => {
        const expPayload = {
            err: "err"
        };
        const expected = {
            type: "GET_SO_USERS_REJECTED",
            payload: expPayload
        }

        expect(rejectGetSOUsers(expPayload)).toEqual(expected);
    });

    it("should get so users", (done) => {
        const expectedPayload = {
            items: [
                {
                    display_name: "Billy"
                },
                {
                    display_name: "Dave"
                }
            ]
        };
        
        moxios.stubRequest("/sousers", {
            status: 200,
            response: expectedPayload
        });

        let startCall = true;
        const fakeDispatch = (action) => {
            if(startCall){
                expect(action).toEqual({ type: "GET_SO_USERS_STARTED" });
                startCall = false;
            }
            else{
                expect(action).toEqual({ 
                    type: "GET_SO_USERS_FULFILLED",
                    payload: expectedPayload
                });
                done();
            }
        };

        getSOUsers(fakeDispatch);
    });
});