import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import EditForm from "./EditForm";
export class Book extends Component {
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

  render() {
    return (
      <>
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
            style={{
              margin: "5px 10px",
            }}
          >
            Remove
          </Button>
          <Button
            onClick={() => this.setState({ show: true })}
            variant="info"
            style={{
              margin: "5px 10px",
            }}
          >
            Update
          </Button>
        </Card>
        <EditForm
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          book={this.props.ele}
          updateBooks={this.props.updateBooks}
          index={this.props.index}
        />
      </>
    );
  }
}

export default Book;
