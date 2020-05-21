import React from 'react';
import App from './app.js';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
        return (<App />)
    }
};

const root = document.getElementById('root');
ReactDOM.render( < Main / > , root);