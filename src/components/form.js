import React from 'react';
import {render} from 'enzyme';
import '../components/form.scss'

class Form extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            request: '',
            method: ['POST', 'PUT', 'GET', 'PATCH', 'DELETE'],
            currentMethod: 'GET',
            response: ''
        }
    };

    handleInput = event => {
    this.setState({request: event.target.value})
    };

    handleGet = async() => {
        let raw = await fetch(`${this.state.request}`);
        let data = await raw.json();
        this.setState({response:data});
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
                <h1>RESTy</h1>
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