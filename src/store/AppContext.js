import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    locationPage: "",
    searchTerm: "",
    searchHandler: (searchParam) => {},
});

export default AppContext;
