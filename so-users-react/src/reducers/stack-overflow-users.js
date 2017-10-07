const defaultState = {
    data: [],
    fetched: false,
    fetching: false,
    error: false,
    errorMessage: ""
};

export default function(state = defaultState, action){

    if(action.type === "GET_SO_USERS_STARTED"){
        return {...state, fetching: true, fetched: false };
    }
    else if (action.type === "GET_SO_USERS_FULFILLED"){
        return {...state, fetching: false, fetched: true, data: action.payload };
    }
    else if (action.type === "GET_SO_USERS_REJECTED"){
        return {...state, 
            fetching: false, 
            fetched: false,
            error: true,
            errorMessage: "Failed to get StackOverflow Users, please try again."
        };
    }

    return state;
}