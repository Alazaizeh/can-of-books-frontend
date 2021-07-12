import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card } from "react-bootstrap";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3002/books?email=${this.props.auth0.user.email}`)
      .then((resultData) => {
        console.log(resultData.length);
        this.setState({
          books: resultData.data.map((ele) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ width: "18rem" }}
                  variant="top"
                  src={ele.img}
                />
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>{ele.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          }),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <div className="fav-books">{this.state.books} </div>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
