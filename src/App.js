import React from "react";
import { Routes, Route } from 'react-router-dom';
import AppWrapper from "./components/UI/AppWrapper/AppWrapper";
import Header from "./components/UI/Header/Header";
import AnimeWatchListPage from "./components/Pages/AnimeWatchListPage/AnimeWatchList";
import NextAnimeListPage from "./components/Pages/NextAnimeListPage/NextAnimeListPage";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="animeWatchList" element={<AnimeWatchListPage />} />
        <Route path="nextAnimesList" element={<NextAnimeListPage />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
