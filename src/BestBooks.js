import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import BookForm from "./BookForm";
import Book from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
    };
  }
  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`
      )
      .then((resultData) => {
        this.renderBooks(resultData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderBooks = (newBooks) => {
    this.setState({
      books: newBooks.data.map((ele, index) => {
        return (
          <Book
            index={index}
            removeBooks={this.removeBooks}
            updateBooks={this.updateBooks}
            key={index}
            ele={ele}
          />
        );
      }),
    });
  };

  removeBooks = (index) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/deleteBook/${index}`, {
        params: { email: this.props.auth0.user.email },
      })
      .then((resultData) => {
        this.renderBooks(resultData);
      });
  };

  updateBooks = (index, bookObj) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER}/updateBook/${index}?email=${this.props.auth0.user.email}`,
        bookObj
      )
      .then((resultData) => {
        this.renderBooks(resultData);
      });
  };

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <BookForm
          removeBooks={this.removeBooks}
          renderBooks={this.renderBooks}
          updateBook={this.updateBooks}
        />
        <div className="fav-books">{this.state.books} </div>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
