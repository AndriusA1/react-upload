import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AllUsersPage from "./pages/AllUsersPage";
import ConversationPage from "./pages/ConversationPage";
import Toolbar from "./components/Toolbar";
import { useRef, useState, useEffect } from "react";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Toolbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/AllUsers" element={<AllUsersPage />} />
          <Route path="/Conversation" element={<ConversationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
