import axios from 'axios';

export const startGetSOUsers = () => ({
    type: "GET_SO_USERS_STARTED"
});

export const fulfillGetSOUsers = (data) => ({
    type: "GET_SO_USERS_FULFILLED",
    payload: data
});

export const rejectGetSOUsers = (err) => ({
    type: "GET_SO_USERS_REJECTED",
    payload: err
});

export const getSOUsers = (dispatch) => {
    dispatch(startGetSOUsers());

    axios.get("/sousers").then((response) => {
        dispatch(fulfillGetSOUsers(response.data));
    })
    .catch((err) => {
        dispatch(rejectGetSOUsers(err));
    });
}