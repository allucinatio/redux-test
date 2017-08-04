import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeHours from './containers/CartCards.js'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <CartPage/>

        <CartCards/>
      </div>
    );
  }
}

class CartPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.hours)
    return (
      <div>
        <div>
          <h2>My cart</h2>
        </div>
        <div>
          <div>
            Individual subtotals [passed from CartCards]
            {this.props.hours}
          </div>
          <div>
            Subtotal [sum]
          </div>
          <div>
            Plus tax [whatever]
          </div>
          <div>
            Total [sum of sums]

          </div>
          <div>
            <button>Checkout</button>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

class CartCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ChangeHours />
    );
  }
}

export default App;
