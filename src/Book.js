import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class Book extends Component {
  render() {
    return (
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Img
          style={{ width: "18rem" }}
          variant="top"
          src={this.props.ele.img}
        />
        <Card.Body style={{ height: "12rem", overflowY: "auto" }}>
          <Card.Title>{this.props.ele.name}</Card.Title>
          <Card.Text>{this.props.ele.description}</Card.Text>
        </Card.Body>
        <Button
          onClick={() => this.props.removeBooks(this.props.index)}
          variant="danger"
        >
          Remove
        </Button>
      </Card>
    );
  }
}

export default Book;
