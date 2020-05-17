import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { login } from './../../UserFunctions'
import "./../../wrap.css";
import FacebookLogin from './../../../../thirdParty/FacebookLogin/FacebookLogin';
import GoogleAuth from './../../../../thirdParty/GoogleLogin/GoogleLogin';


class Login extends Component {

constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email:'',
      password:'',
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

   onChangePassword(e) {
    this.setState({
       password: e.target.value
    })
  }

 onSubmit(e) {
    e.preventDefault();

    const user = {

      email: this.state.email,
      password: this.state.password,
    }

    login(user).then(res => {
        if (res) {
          this.props.history.push(`/profile`)
        }
      })

    this.setState({
      email:'',
      password:'',
    })
  }
  
  render() {
    return (
      <div className="app flex-row align-items-center center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input  type="text"
		        required
		        className="form-control"
		        placeholder="Email"
		        autoComplete="email"
		        value={this.state.email}
		        onChange={this.onChangeEmail}
		       />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
		        required
		        className="form-control"
		        placeholder="Password"
		        autoComplete="new-password"
		        value={this.state.password}
		        onChange={this.onChangePassword}
		       />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button href="/profile" color="primary" className="px-4">Login</Button>

                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="36">
                          <FacebookLogin />
                        </Col>
                        <Col xs="36">
                          <GoogleAuth/>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
