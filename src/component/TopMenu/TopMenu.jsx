import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContextProvider";

import Logo from "../../resources/image/logo.svg"

function TopMenu() {

    const { isLogin, logout } = useContext(LoginContext);
    
    return (
        <Navbar style={{ backgroundColor: "#CDE3FC" }} sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="참방"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>게시판1</Nav.Link>
                        <Nav.Link>게시판2</Nav.Link>
                        <Nav.Link>게시판3</Nav.Link>
                        <Nav.Link>동호회</Nav.Link>
                        <Nav.Link>내 동호회</Nav.Link>
                    </Nav>
                    {
                        isLogin ?
                            <Nav>
                                <Nav.Link as={Link} to={"/mypage"}>마이페이지</Nav.Link>
                                <Nav.Link onClick={logout}>로그아웃</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link as={Link} to={"/login"}>로그인</Nav.Link>
                                <Nav.Link as={Link} to={"/signup"}>회원가입</Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;