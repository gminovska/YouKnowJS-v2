import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import changeMsg from '../actions/change-msg';

class App extends React.Component {
  /**
   * @param {object} props fhowfjweojfw
   */
  constructor(props) {
    super(props);
    this.state = {
      current: '',
    };
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    this.msgListener = this.props.io.on('CHANGE_MSG', (msg) => {
      this.props.change(msg);
    });
  }

  handleChange = (e) => {
    this.setState({ current: e.target.value });
  }

  handleClick = () => {
    this.props.io.emit('CHANGE_MSG', this.state.current);
  }

  /**
   * @returns {object} React Element
   */
  render() {
    return (
      <div>
        <FormGroup style={{ marginTop: '50px', marginLeft: '100px' }}>
          <ControlLabel>Current is: {this.props.msg}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.current}
            placeholder="Your message"
            onChange={this.handleChange}
            style={{ width: '500px', marginTop: '20px', marginBottom: '20px' }}
          />
          <Button
            bsStyle="primary"
            onClick={this.handleClick}
          >
            Send this stuff
          </Button>
        </FormGroup>
      </div>
    );
  }
}

App.propTypes = {
  change: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  io: PropTypes.shape({
    id: PropTypes.string,
    on: PropTypes.func,
    emit: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  msg: state.messages.msg,
  awesome: state.awesomeness.awesome,
  io: state.socket.io,
});

const mapDispatchToProps = dispatch => ({
  change: (msg) => {
    dispatch(changeMsg(msg));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
