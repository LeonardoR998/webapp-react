import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieIndexPage from "./pages/movies/MovieIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} path="/">
          {/* Institunioal Pages */}
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>

          {/* Movie Routers */}
          <Route path="movies">
            <Route index element={<MovieIndexPage />}></Route>
            <Route path=":id" element={<MovieShowPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
