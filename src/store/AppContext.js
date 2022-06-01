import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    locationPage: "",
    searchTerm: "",
    statusFilter: "",
    orderFilter01: "",
    orderFilter02: "",
    onSearchHandler: (searchParam) => {},
    onSelectHandler: (type, filterParam) => {},
});

export default AppContext;
