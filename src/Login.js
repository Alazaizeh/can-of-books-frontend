import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from "./LoginButton"

class Login extends React.Component {
  render() {

    return (

      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>LOG IN</Card.Title>
          <Card.Text>
            Click Below to Log In            </Card.Text>
          <LoginButton />

        </Card.Body>
        <Card.Footer className="text-muted"> </Card.Footer>
      </Card>
    )
  }
}

export default Login;


