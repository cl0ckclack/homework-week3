import React from 'react';
import Output from './Output.Component';
import { Route, Link,Switch  } from 'react-router-dom';


class input extends React.Component {

  constructor() {
    super();

    this.state = {
      topicBox: null

    };

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    console.log( this.state.topicBox);
  }

  render() {
      const { match } = this.props;
    return <div>
      <input
        type="text"  name="topicBox"   placeholder="Enter topic here..."   value={ this.state.topicBox }  onChange={ this.handleChange }   />
                <ul>
                    <li>
                    <Link to={ {pathname: "/Output/"+this.state.topicBox}} >Submit</Link>
                    </li>
                </ul>



  </div>

  }
}


export default input;
