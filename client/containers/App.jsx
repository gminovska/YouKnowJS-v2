import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import awesomeAction from '../actions/awesome';
import changeName from '../actions/change-name';

const App = ({ awesome, makeItAwesome, name, change }) => (
  <div>
    {name || 'John'} {awesome ? 'is awesome!!' : 'sucks hard'}.
    <br />
    <Button
      bsStyle="primary"
      onClick={makeItAwesome}
    >
      Make it awesome
    </Button>
    <Button
      bsStyle="danger"
      onClick={() => change('Michael')}
    >
      Change the name!
    </Button>
  </div>
);

App.propTypes = {
  change: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  awesome: PropTypes.bool.isRequired,
  makeItAwesome: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.nameStuff.name,
  awesome: state.awesomeness.awesome,
});

const mapDispatchToProps = dispatch => ({
  makeItAwesome: () => {
    dispatch(awesomeAction());
  },
  change: (name) => {
    dispatch(changeName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
