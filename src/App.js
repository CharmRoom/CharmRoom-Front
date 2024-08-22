import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TopMenu from "./component/TopMenu/TopMenu";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import LoginContextProvider from "./context/LoginContextProvider";
function App() {

  return (

    <BrowserRouter>
      <LoginContextProvider>
        <TopMenu />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </LoginContextProvider>
    </BrowserRouter>

  );
}

export default App;
