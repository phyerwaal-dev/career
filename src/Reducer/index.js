const initState = {
    response: []
}

const rootReducer = (state = initState, action) => {
    if (action.type == 'RES_SUCCESS') {
        return {
            ...state,
            response: response
        }
    }
    return state
}

export default rootReducer;