import React, { useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from './AppContext';
import animeWatchList from '../data/animeWatchList';
import nextAnimeList from '../data/nextAnimeList';

const initialState = {
    animeWatchList: animeWatchList,
    nextAnimeList: nextAnimeList,
    locationPage: "",
    searchTerm: "",
    statusFilter: "",
    orderFilter01: "",
    orderFilter02: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOCATION':
            const newLocation = action.value;
            return { ...state, locationPage: newLocation };
        case 'SEARCH':
            const newSearchTerm = action.value;
            return { ...state, searchTerm: newSearchTerm };
        case 'STATUSFILTER': 
            const newStatusFilter = action.value;
            return { ...state, statusFilter: newStatusFilter };
        case 'ORDERFILTER01':
            const newOrderFilter01 = action.value;
            return { ...state, orderFilter01: newOrderFilter01 };
        case 'ORDERFILTER02':
            const newOrderFilter02 = action.value;
            return { ...state, orderFilter02: newOrderFilter02 };
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

    const { locationPage, searchTerm } = state;

    const location = useLocation();

    useEffect(() => {
        let currentLocation = location.pathname.toString();
        locationHandler(currentLocation.toLowerCase());
    }, [location]);

    useEffect(() => {
        if(locationPage === "/animewatchlist") {
            const cloneAnimeList = [...initialState.animeWatchList];
            const newAnimeList = [...cloneAnimeList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERANIME', value: newAnimeList });
        }

        if(locationPage === "/nextanimeslist") {
            const cloneNextAnimeList = [...initialState.nextAnimeList];
            const newNextAnimeList = [...cloneNextAnimeList].filter(animeTitle => animeSearcher(animeTitle.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERNEXTANIME', value: newNextAnimeList });
        }
    }, [locationPage ,searchTerm]);

    const animeSearcher = (animeTitle, param)=> {
        if(animeTitle.includes(param)){
            return true;
        }
        return false;
    }

    const locationHandler = locationPath => {
        dispatch({ type: 'LOCATION', value: locationPath });
    }
    
    const onSearchHandler = searchParam => {
        dispatch({type: 'SEARCH', value: searchParam });
    }

    const onSelectHandler = (type, filterParam) => {
        if(type === 'status') {
            dispatch({type: 'STATUSFILTER', value: filterParam });
            console.log({type, filterParam});
        }

        if(type === 'order01') {
            dispatch({type: 'ORDERFILTER01', value: filterParam });
            console.log({type, filterParam});
        }

        if(type === 'order02') {
            dispatch({type: 'ORDERFILTER02', value: filterParam });
            console.log({type, filterParam});
        }
    }

    const migoContext = {
        animeWatchList: state.animeWatchList,
        nextAnimeList: state.nextAnimeList,
        locationPage: state.locationPage,
        searchTerm: state.searchTerm,
        onSearchHandler: onSearchHandler,
        onSelectHandler: onSelectHandler
    };

    return (
        <AppContext.Provider value={migoContext}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
