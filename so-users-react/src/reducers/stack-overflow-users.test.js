import expect from 'expect';
import reducer from './stack-overflow-users';

describe("Stack Overflow actions", () => {
    const defaultExpected = {
        data: [],
        fetched: false,
        fetching: false,
        error: false,
        errorMessage: ""
    };

    it("should return default state", () => {
        const result = reducer(undefined, {});
        expect(result).toEqual(defaultExpected);
    });

    it("should return a state for fetching", () => {
        const expected = {...defaultExpected, fetching: true };
        const result = reducer(undefined, { type: "GET_SO_USERS_STARTED" });
        expect(result).toEqual(expected);
    });

    it("should return a state for fetched", () => {
        const expPayload = [ "test" ];

        const expected = {...defaultExpected, fetched: true, data: expPayload };
        const result = reducer(undefined, { type: "GET_SO_USERS_FULFILLED", payload: expPayload });
        expect(result).toEqual(expected);
    });

    it("should return a state for error", () => {
        const expected = {...defaultExpected,
            error: true, 
            errorMessage: "Failed to get StackOverflow Users, please try again."
        };
        const result = reducer(undefined, { type: "GET_SO_USERS_REJECTED" });
        expect(result).toEqual(expected);
    });
});