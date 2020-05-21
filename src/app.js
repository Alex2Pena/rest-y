import React from "react";
import Form from "./components/form.js"
import Results from "./components/results.js"
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      results: [],
      method: 'GET'
    };
  };

  handleForm = (count, method, response) => {
    this.setState({
      count,
      response,
      method
    });
  };

  render() {
    return ( 
      <React.Fragment>

        <Form 
          handleForm = {this.handleForm}
          count = {this.state.count}
          method = {this.state.method}
          response = {this.state.response}
        />

        <Results
          handleResults = {this.handleResult}
          count = {this.state.count}
          name = {this.state.name}
          response = {this.state.response}
        />

      </React.Fragment>
    );
  };
};

export default App;