import { Container, Nav, Navbar } from "react-bootstrap";

function TopMenu() {
  return (
    <Navbar style={{ backgroundColor: "#CDE3FC" }} sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">참방</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">게시판1</Nav.Link>
            <Nav.Link href="#">게시판2</Nav.Link>
            <Nav.Link href="#">게시판3</Nav.Link>
            <Nav.Link href="#">동호회</Nav.Link>
            <Nav.Link href="#">내 동호회</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">마이페이지</Nav.Link>
            <Nav.Link href="#">로그아웃</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopMenu;