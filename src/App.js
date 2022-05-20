import React from "react";
import WrapperApp from "./components/UI/WrapperApp/WrapperApp";
import Header from "./components/UI/Header/Header";
import WrapperCards from "./components/UI/WrapperCards/WrapperCards";

const App = () => {
  return (
    <WrapperApp>
      <Header />
      <WrapperCards />
    </WrapperApp>
  );
}

export default App;
