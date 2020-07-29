const initState = {
    res: []
}

const rootReducer = (state = initState, action) => {
    if (action.type == 'RES_SUCCESS') {
        let resp = action.response;
        return {
            ...state,
            res: resp,
        }
    }
    return state
}

export default rootReducer;