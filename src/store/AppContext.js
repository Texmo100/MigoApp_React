import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    optionSelected: "",
    searchTerm: "",
    searchHandler: (searchParam) => {},
    optionHandler: (optionName) => {},
});

export default AppContext;
