import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './resources/css/main.css'
import Main from "./pages/Main";
import TopMenu from "./component/TopMenu/TopMenu";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import LoginContextProvider from "./context/LoginContextProvider";
import { Container } from "react-bootstrap";
function App() {

  return (
  
    <BrowserRouter>
      <LoginContextProvider>
        <TopMenu />
        <Container>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </Container>
        
      </LoginContextProvider>
    </BrowserRouter>

  );
}

export default App;
