import React from "react";
import AppWrapper from "./components/UI/AppWrapper/AppWrapper";
import Header from "./components/UI/Header/Header";
import CardsWrapper from "./components/UI/CardsWrapper/CardsWrapper";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <CardsWrapper />
    </AppWrapper>
  );
}

export default App;
