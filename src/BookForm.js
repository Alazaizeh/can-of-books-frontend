import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  submitForm = (e) => {
    this.handleClose();
    e.preventDefault();

    let book = {
      name: e.target.book.value,
      description: e.target.description.value,
      status: e.target.status.value,
      img: e.target.image.value,
    };
    console.log(book);
    axios
      .post(
        `http://localhost:3002/addBook?email=${this.props.auth0.user.email}`,
        book
      )
      .then((resultData) => {
        this.props.updateBooks(resultData);
      });
  };

  render() {
    return (
      <>
        <Button variant="info" onClick={this.handleShow}>
          Add Book
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book</Form.Label>
                <Form.Control type="text" name="book" />
                {/* <Form.Text className="text-muted">Book Title</Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Status</Form.Label>
                <Form.Control name="status" type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control name="image" type="text" />
              </Form.Group>

              <Button
                style={{
                  display: "block",
                  padding: "5px 20px",
                  margin: "0 auto",
                }}
                type="submit"
                variant="info"
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(BookForm);
