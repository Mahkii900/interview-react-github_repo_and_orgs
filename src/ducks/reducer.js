const initialState = {
    username: ''
}

const SET_USERNAME = 'SET_USERNAME'

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_USERNAME:
            return {...state, username: payload}
        default: return state;
    }
}