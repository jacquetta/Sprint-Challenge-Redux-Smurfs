import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }


  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          <h3>{smurf.name}</h3>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);