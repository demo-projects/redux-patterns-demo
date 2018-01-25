import React, { Component } from 'react';
import {Books} from "./Books";
import {OrderBook} from "./OrderBook";
import {Spinner} from './Spinner';
import {connect} from "react-redux";

const API = 'https://www.googleapis.com/books/v1/volumes?q=react';

class App extends Component {

  state = { books: [] };

  componentWillMount() {
    fetch(API).then( result => result.json())
      .then( result => this.setState({ books: result.items}) )
  }

  selectBook = (bookId) => {
    console.log(bookId);
  };

  handleOrder = (email) => {
    console.log(email);
  };

  render() {
    return (
      <div className="container app-wrapper">
        <header>
          <h1>Redux Patterns</h1>
        </header>

        <Spinner />

        <Books books={this.state.books} onSelect={this.selectBook}/>
        <OrderBook onPlaceOrder={this.handleOrder}></OrderBook>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.ui.pending,
  orderInProcess: state.ui.orderInProcess,
  books: state.books,
  order: state.order
});

export default connect(mapStateToProps)(App);
