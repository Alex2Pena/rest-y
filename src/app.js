import React from "react";
import Header from "./components/header/header.js"
import Form from "./components/form/form.js"
import Footer from "./components/footer/footer.js"
import Results from "./components/results/results.js"
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: '',
      count: 0,
      method: 'GET',
      response: [],
      name:'',
    }
  };

  handleForm = (headers, count, method, response) => {
    this.setState({
      headers,
      count,
      method,
      response
    })
    console.log(headers, count, method, response);
  };

  handleResults = (count, response, name) => {
    this.setState({
      count,
      response,
      name
    })
  };

  render() {
    console.log('my state', this.state);
    return ( 
      <React.Fragment>

        <Header />

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

        <Footer />

      </React.Fragment>
    );
  };
};

export default App;