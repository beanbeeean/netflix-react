import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  let keyword = "";

  const getKeyword = (e) => {
    keyword = e.target.value;
  };

  const searchMovie = (e) => {
    e.preventDefault();
    console.log("keyword", keyword);
    dispatch({ type: "GET_KEYWORD_SUCCESS", payload: keyword });
    navigate("/movies");
    // console.log("keyword", e);
  };
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            width={100}
            src="data:image/png;base64,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"
            onClick={goHome}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => searchMovie(e)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => getKeyword(e)}
            />
            <Button type="submit" variant="outline-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
