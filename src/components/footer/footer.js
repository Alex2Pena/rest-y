import React from 'react';
import {render} from 'enzyme';
import '../footer/footer.scss';

class Footer extends React.Component {
    render() {
      return (
            <nav>
                <p>By: Alex Peña</p>
            </nav>
      )
    }
  };
  
  export default Footer;