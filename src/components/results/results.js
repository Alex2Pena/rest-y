import React from 'react';
import {render} from 'enzyme';
import '../form/form.js'

class Results extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            response:'',
            name:''
        }
    };


handleResponse = async() => {

    let raw = this.props.response;
    let data =  raw;
    this.setState({
        response:data
    });
    
    // console.log('this is my data', data);
    // console.log('this is my raw', raw);
    
    let count = data.count;
    let response = data.response;
    let name = data.response.name;
    
    this.props.handleResults(count, response, name);
}

render() {
    console.log(this.props.response);
        return (
            <>
            <p>Here are the results:</p>
        <p>{this.props.response.name.map()}</p>
            </>
        )
    };
};
export default Results;