const initialState = {
    min: 1,
    max: 10
};

const numbersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_MIN_NUM':
            return {
                ...state,
                min: action.payload
            };
        case 'CHANGE_MAX_NUM':
            return {
                ...state,
                max: action.payload
            };
        default:
            return state;
    }
}

export default numbersReducer;