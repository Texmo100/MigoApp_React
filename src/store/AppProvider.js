import React, { useReducer } from 'react';
import AppContext from './AppContext';

const initialState = {
    optionSelected: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPTION':
            const newOptionSelected = action.value;
            return { optionSelected: newOptionSelected };
        default:
            return state;
    };
}

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const optionHandler = optionName => {
        dispatch({ type: 'OPTION', value: optionName });
        console.log(optionName);
    }

    const migoContext = {
        optionSelected: state.optionSelected,
        optionHandler: optionHandler
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;