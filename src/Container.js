import React, { PureComponent } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

class Container extends PureComponent {
  render() {
    return (
      <div>
        <AppBar title={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  appName: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

function selector(state) {
  return state.config;
}

export default connect(
  state => selector(state),
  { },
)(Container);
