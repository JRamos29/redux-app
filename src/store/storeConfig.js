import {
    createStore,
    combineReducers
} from 'redux';

const reducers = combineReducers({

    numbers: function (state, action) {

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
                return {
                    min: 7,
                        max: 31
                };
        }


    }
});


function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;