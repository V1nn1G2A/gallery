import React from "react";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPhoto from "./listPhoto/ListPhoto";
import Account from "./account/Account";
import ListPhotoBd from "./ListPhotoBd/ListPhotoBd";
import { usePosts } from "../../hooks/usePosts";

const Main = () => {
  const post = usePosts();
 
  return (
    <main className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<ListPhoto/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/bd" element={<ListPhotoBd/>} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
