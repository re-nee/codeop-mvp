import React from "react";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  // updateInput()

  // componentDidMount()

  addQuote(quote) {
    this.setState({
      quotes: [...this.state.quotes, quote]
    });
  }

  // updateQuote()

  deleteQuote(quote) {
    this.setState({
      quotes: this.state.quotes.filter(q => q.id !== quote.id)
    })
  }
  

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminView
              quotes={this.state.quotes}
              addQuote={quote => this.addQuote(quote)}
              deleteQuote={quote => this.deleteQuote(quote)}
            />
          </Route>
          <Route path="/">
            <UserView quotes={this.state.quotes} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
