import React, { useReducer, useEffect } from 'react';
import AppContext from './AppContext';
import animeWatchList from '../data/animeWatchList';
import nextAnimeList from '../data/nextAnimeList';

const initialState = {
    animeWatchList: animeWatchList,
    nextAnimeList: nextAnimeList,
    optionSelected: "",
    searchTerm: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'OPTION':
            const newOptionSelected = action.value;
            return { ...state, optionSelected: newOptionSelected };
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        case 'FILTERANIME':
            const newFilteredAnimeList = action.value;
            return { ...state, animeWatchList: newFilteredAnimeList };
        case 'FILTERNEXTANIME':
            const newFilteredNextAnimeList = action.value;
            return { ...state, nextAnimeList: newFilteredNextAnimeList };
        default:
            return state;
    };
}

const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { optionSelected } = state;

    useEffect(() => {
        let localStorageItem = window.localStorage.getItem('optionSelected');
        if(localStorageItem) {
            dispatch({ type: 'OPTION', value: localStorageItem });
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('optionSelected', optionSelected);
    }, [optionSelected]);

    const searchHandler = searchParam => {
        console.log(searchParam);
        dispatch({type: 'SEARCH', value: searchParam });
    }

    const optionHandler = optionName => {
        dispatch({ type: 'OPTION', value: optionName });
    }

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        optionSelected: state.optionSelected,
        searchTerm: state.searchTerm,
        searchHandler: searchHandler,
        optionHandler: optionHandler
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
