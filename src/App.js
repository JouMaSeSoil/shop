import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Welcome from "./Components/Welcome/Welcome";
import About from "./Components/About/About";
import Product from "./Components/Products/Product";
import "tachyons";
import { Component } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Checkout from "./Components/Checkout/Checkout";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bagQuantity: 0,
      interested: false,
      route: "home",
    };
  }

  updateInterestedBasket = (data) => {
    this.state.interested
      ? this.setState({ interested: false })
      : this.setState({ interested: true });
  };

  setQuantity = (data) => {
    console.log('here')
    if (data.target.className.includes('plus')) {
      this.setState((prevState) => {
        return { bagQuantity: prevState.bagQuantity + 1 };
      });
    } else {
      this.state.bagQuantity <= 1
        ? this.setState({ bagQuantity: 0 })
        : this.setState((prevState) => {
            return { bagQuantity: prevState.bagQuantity - 1 };
          });
    }
  };
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  //comment
  render() {
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
          interested={this.state.interested}
          route={this.state.route}
        />
        {this.state.route === "home" ? (
          <div>
            <Welcome />
            <About id="About" />
            <Product
              setQuantity={this.setQuantity}
              bagQuantity={this.state.bagQuantity}
              updateInterestedBasket={this.updateInterestedBasket}
              interested={this.state.interested}
              onRouteChange={this.onRouteChange}
            />
            
          </div>
        ) : (
          <Checkout
            onRouteChange={this.onRouteChange}
            bagQuantity={this.state.bagQuantity}
            interested={this.state.interested}
            route={this.state.route}
          />
        )}

        <Contacts />
      </div>
    );
  }
}

export default App;
