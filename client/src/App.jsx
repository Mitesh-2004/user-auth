import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
};

export default App;
