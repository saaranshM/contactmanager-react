import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./componenets/contacts/Contacts";
import Header from "./componenets/layout/Header";
import AddContact from "./componenets/contacts/AddContact";
import EditContact from "./componenets/contacts/EditContact";
import About from "./pages/About";
import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./pages/NotFound";
import Test from "./componenets/test/Test";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
