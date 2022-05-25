import React from 'react';

const AppContext = React.createContext({
    optionSelected: "",
    optionHandler: (optionName) => {},
});

export default AppContext;
