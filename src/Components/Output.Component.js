import React from 'react';
import { Route, Link } from 'react-router-dom';
import input from './Input.Component';
class Output extends React.Component {


  render() {
    const location = this.props.location;
    const params = this.props.match.params;
    return (
      <div>
        <p>{params.value}</p>
          
      </div>
    );
  }
}
export default Output ;
