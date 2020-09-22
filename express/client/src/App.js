import React from "react";
import AdminView from "./components/AdminView";
import UserView from "./components/UserView";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const API_URL = 'http://localhost:5000/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ quotes: json });
      });
  }


  addQuote(quote) {
    this.setState({
      quotes: [...this.state.quotes, quote]
    });
  }


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
            <UserView 
              quotes={this.state.quotes} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
