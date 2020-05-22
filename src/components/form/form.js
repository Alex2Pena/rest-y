import React from 'react';
import {render} from 'enzyme';
import '../form/form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            url: '',
            method: ['POST', 'PUT', 'GET', 'PATCH', 'DELETE'],
            currentMethod: 'GET',
            response: ''
        }
    };

    handleInput = event => {
    this.setState({url: event.target.value})
    };

    handleGet = async() => {

        let raw = await fetch(`${
            this.state.url
        }`);

        let data = await raw.json();
        this.setState({
            response:data
        });
        
        console.log("this is my get data", data);
        console.log("this is my get raw", raw);

        let headers = raw.headers;
        let count = data.count;
        let results = data.results;
        let method = this.state.currentMethod;

        // console.log('look at my props', this.props);
        
        // // run this function with the above values to set the `state` of the `App`
        this.props.handleForm(headers, count, method, results);
    }
    
    

    handlePost = async() => {

    }

    handlePut = async() => {

    }

    handlePatch = async() => {

    }

    handleDelete = async() => {

    }

    logValue = (e) => {
        console.log(e.target.textContent,
            this.state.currentMethod,
            this.setState(
                {currentMethod: e.target.textContent}),
        
            this.props.handleForm(
                this.props.count, 
                this.props.response,
                this.state.currentMethod
            )
        )
    };

    render() {
        return (
            <>
                <input onChange = {this.handleInput}
                placeholder="Insert URL Here!"/>
                <h2>Select Method Below</h2>
                <div>
                <button onClick = {this.logValue}>POST</button>
                <button onClick = {this.logValue}>PUT</button>
                <button onClick = {this.handleGet}>GET</button>
                <button onClick = {this.logValue}>PATCH</button>
                <button onClick = {this.logValue}>DELETE</button>
                </div>
            </>
    )
}
}

export default Form;