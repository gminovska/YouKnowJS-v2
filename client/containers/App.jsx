import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';

import { makeRequest } from '../actions/get-company-data';


class App extends React.Component {
  /**
   * @param {object} props fhowfjweojfw
   */
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleClick = () => {
    this.props.makeRequest(this.state.text);
  }

  /**
   * @returns {object} React Element
   */
  render() {
    return (
      <div>
        <FormGroup>
          <ControlLabel>Add stock:</ControlLabel>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.text}
              placeholder="Stock's symbol"
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button bsStyle="success" onClick={this.handleClick}>
                Add
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        {this.props.data ? this.props.data.companyName : null}
      </div>
    );
  }
}

App.propTypes = {
  makeRequest: PropTypes.func.isRequired,
  data: PropTypes.shape({
    companyName: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  data: state.data,
});
const mapDispatchToProps = dispatch => ({
  makeRequest: (symbol) => {
    dispatch(makeRequest(symbol));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
