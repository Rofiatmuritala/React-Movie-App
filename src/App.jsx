import React from "react";
import "./App.css";
import Popular from "./components/Popular";
import Navbar from "./components/Navbar";
import Toprated from "./components/Toprated";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularPage from "./pages/PopularPage";
import RatedPage from "./pages/RatedPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/toprated" element={<RatedPage />}></Route>
          {/* <Route path="/"  element={<PopularDetailPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
