import React from 'react';

const AppContext = React.createContext({
    animeWatchList: [],
    nextAnimeList: [],
    locationPage: "",
    searchTerm: "",
    statusFilter: "",
    orderFilter01: "",
    orderFilter02: "",
    isSidebarShown: false,
    onSearchHandler: (searchParam) => {},
    onSelectHandler: (type, filterParam) => {},
    onSidebarHandler: (sign) => {},
});

export default AppContext;
