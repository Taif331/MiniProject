import {Container,Row ,Col,Label,FormGroup,Input,Form,Button} from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import logo from "../Images/book.jpeg";
import "../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState(); 
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const handleLogin = () => {
    const userData = {
      email, email,
      password,password,
    };
  dispatch(login(userData));
};

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [user, isError, isSuccess]);

  return (
    <div>
      <Container>
        <Form >
          <Row>
            <Col md={3}>
              <img src={logo} className="logo" />
            </Col>
            <br></br>
            <br></br>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter password..."
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Button  color="primary" onClick={() => handleLogin()}
                > Login </Button>
            </Col>
          </Row>
        </Form>
        <p className="smalltext">
          No Account? <Link to="/register">Sign Up now.</Link>
        </p>
      </Container>
    </div>
  );
};

export default Login;
