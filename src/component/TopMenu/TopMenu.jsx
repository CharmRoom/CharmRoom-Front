import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContextProvider";

import Logo from "../../resources/image/logo.svg"
import BoardApi from "../../apis/BoardApi";

function TopMenu() {

    const { isLogin, logout } = useContext(LoginContext);
    const [boards, setBoards] = useState(null);

    const fetchBoards = async () => {
        let response;
        try {
            response = await BoardApi.getBoardList();
        } catch (e) {
            return;
        }
        setBoards(response.data.data);
    }

    useEffect(() => {
        fetchBoards();
    }, [])

    return (
        <Navbar style={{ backgroundColor: "#CDE3FC" }} sticky="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="참방" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {boards &&
                            boards.map((board) => {
                                return (
                                    <Nav.Link
                                        key={board.id}
                                        as={Link}
                                        to={`/board/${board.id}`}>
                                        {board.name}
                                    </Nav.Link>
                                );
                            })}
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