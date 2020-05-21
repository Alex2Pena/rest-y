import React from 'react';
import {render} from 'enzyme';
import './form.js'

class Results extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            response: '',
            name: ''
        }
    };

 handleResults = event => {
    this.setState({response: event.target.value.forEach(name => {

    })
})
    };

    render() {
        return (
            <>
                <p>Here are the results:</p>
            </>
    )
}
}

export default Results;