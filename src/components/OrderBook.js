import React, {Component} from 'react';

export class OrderBook extends Component {

  state = {email: ''};

  handleEmail = ({target}) => {
    this.setState({email: target.value})
  };

  render() {
    const {onSubmitOrder} = this.props;
    const {email}         = this.state;

    return (
      <div className="books-wrapper">
        <pre>book image</pre>

        <input placeholder="your email"
               value={email}
               onChange={this.handleEmail}/>
        <button onClick={() => onSubmitOrder(email)}>order</button>
      </div>
    )
  }
}
