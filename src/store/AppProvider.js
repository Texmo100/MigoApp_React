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

    const { locationPage, searchTerm, statusFilter, orderFilter01, orderFilter02 } = state;

    const location = useLocation();

    useEffect(() => {
        let currentLocation = location.pathname.toString();
        locationHandler(currentLocation.toLowerCase());
    }, [location]);

    useEffect(() => {
        if (locationPage === "/animewatchlist") {
            const cloneAnimeList = [...initialState.animeWatchList];
            const newAnimeList = [...cloneAnimeList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERANIME', value: newAnimeList });
        }

        if (locationPage === "/nextanimeslist") {
            const cloneNextAnimeList = [...initialState.nextAnimeList];
            const newNextAnimeList = [...cloneNextAnimeList].filter(animeTitle => animeSearcher(animeTitle.toLowerCase(), searchTerm.toLowerCase()));
            dispatch({ type: 'FILTERNEXTANIME', value: newNextAnimeList });
        }
    }, [locationPage, searchTerm]);

    useEffect(() => {
        if (locationPage === "/animewatchlist") {
            const cloneAnimeList = [...initialState.animeWatchList];
            const filteredAnimeList = statusFilter ? [...cloneAnimeList].filter(anime => anime.status.toLowerCase() === statusFilter.toLowerCase()) : cloneAnimeList;
            if (orderFilter01) {
                if (orderFilter01 === 'title') {
                    const orderedAnimeList = animeSorter('byTitle', filteredAnimeList);
                    dispatch({ type: 'FILTERANIME', value: orderedAnimeList });
                }
                if (orderFilter01 === 'score') {
                    const orderedAnimeList = animeSorter('byScore', filteredAnimeList);
                    dispatch({ type: 'FILTERANIME', value: orderedAnimeList });
                }
            } else {
                dispatch({ type: 'FILTERANIME', value: filteredAnimeList });
            }
        }

        if (locationPage === "/nextanimeslist") {
            const cloneNextAnimeList = [...initialState.nextAnimeList];
            if (orderFilter02) {
                const newNextAnimeList = orderFilter02 === 'ascending' ? [...cloneNextAnimeList].sort() : [...cloneNextAnimeList].sort().reverse();
                dispatch({ type: 'FILTERNEXTANIME', value: newNextAnimeList });
            } else {
                dispatch({ type: 'FILTERNEXTANIME', value: cloneNextAnimeList });
            }
        }
    }, [locationPage, statusFilter, orderFilter01, orderFilter02]);

    const animeSearcher = (animeTitle, param) => {
        if (animeTitle.includes(param)) {
            return true;
        }
        return false;
    }

    const animeSorter = (type, animeList) => {
        if (type === 'byTitle') {
            const newOrderedAnimeList = [...animeList].sort((animeA, animeB) => {
                if (animeA.title < animeB.title) {
                    return -1;
                }
        
                if (animeA.title > animeB.title) {
                    return 1;
                }
        
                return 0;
            });
            return newOrderedAnimeList;
        }

        if (type === 'byScore') {
            const newOrderedAnimeList = animeList.sort((animeA, animeB) => animeA.score - animeB.score);
            return newOrderedAnimeList;
        }
    }

    const locationHandler = locationPath => {
        dispatch({ type: 'LOCATION', value: locationPath });
    }

    const onSearchHandler = searchParam => {
        dispatch({ type: 'SEARCH', value: searchParam });
    }

    const onSelectHandler = (type, filterParam) => {
        if (type === 'status') {
            dispatch({ type: 'STATUSFILTER', value: filterParam });
            console.log({ type, filterParam });
        }

        if (type === 'order01') {
            dispatch({ type: 'ORDERFILTER01', value: filterParam });
            console.log({ type, filterParam });
        }

        if (type === 'order02') {
            dispatch({ type: 'ORDERFILTER02', value: filterParam });
            console.log({ type, filterParam });
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
