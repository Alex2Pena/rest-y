import React from 'react';
import {render} from 'enzyme';
import '../header/header.scss';

class Header extends React.Component {
    render() {
      return (
          <header>
            <h1>RESTy</h1>
            <nav>
                <ul>
                    <button>Home</button>
                    <button>History</button>
                </ul>
            </nav>
          </header>
      )
    };
  };
  
  export default Header;