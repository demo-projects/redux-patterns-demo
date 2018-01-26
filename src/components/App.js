import React, {Component} from 'react';
import {Books} from "./Books";
import {OrderBook} from "./OrderBook";
import {Spinner} from './Spinner';
import {connect} from "react-redux";
import {getBooks, selectBook} from "../redux/actions/books";
import {submitOrder} from "../redux/actions/order";

class App extends Component {

  componentWillMount() {
    this.props.getBooks()
  }

  renderContent = () => {
    const {orderInProcess, books, selectBook, submitOrder} = this.props;

    return orderInProcess ?
      <OrderBook onSubmitOrder={submitOrder}/> : <Books books={books} onBookSelect={selectBook}/>
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

export default connect(mapStateToProps, {
  getBooks, selectBook, submitOrder
})(App);
