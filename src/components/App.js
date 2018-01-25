import React, {Component} from 'react';
import {Books} from "./Books";
import {OrderBook} from "./OrderBook";
import {Spinner} from './Spinner';
import {connect} from "react-redux";

const API = 'https://www.googleapis.com/books/v1/volumes?q=react';

class App extends Component {

  state = {books: []};

  componentWillMount() {
    fetch(API).then(result => result.json())
      .then(result => this.setState({books: result.items}))
  }

  selectBook = (bookId) => {
    console.log(bookId);
  };

  handleOrder = (email) => {
    console.log(email);
  };

  renderContent = () => {
    const {orderInProcess} = this.props;

    return orderInProcess ?
      <OrderBook onPlaceOrder={this.handleOrder}/> : <Books books={this.state.books} onSelect={this.selectBook}/>
  };

  render() {
    const {pending} = this.props;

    return (
      <div className="container app-wrapper">
        <header>
          <h1>Redux Patterns</h1>
        </header>

        {pending && <Spinner/>}

        {this.renderContent()}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  pending       : state.ui.pending,
  orderInProcess: state.ui.orderInProcess,
  books         : state.books,
  order         : state.order
});

export default connect(mapStateToProps)(App);
