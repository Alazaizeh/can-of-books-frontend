import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class EditForm extends Component {
  submitForm = (e) => {
    this.props.handleClose();
    e.preventDefault();

    let book = {
      name: e.target.book.value,
      description: e.target.description.value,
      status: e.target.status.value,
      img: e.target.image.value,
    };

    this.props.updateBooks(this.props.index, book);
  };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book</Form.Label>
                <Form.Control
                  type="text"
                  name="book"
                  defaultValue={this.props.book.name}
                />
                {/* <Form.Text className="text-muted">Book Title</Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  defaultValue={this.props.book.description}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  name="status"
                  type="text"
                  defaultValue={this.props.book.status}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  name="image"
                  type="text"
                  defaultValue={this.props.book.img}
                />
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

export default withAuth0(EditForm);
