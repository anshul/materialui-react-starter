import React, { PureComponent } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

class Home extends PureComponent {

  render() {
    return (
      <Card>
        <CardHeader title={this.props.heading} subtitle={this.props.subheading} actAsExpander showExpandableButton />
        <CardActions>
          <FlatButton label="This does not exist" primary href="/404" />
        </CardActions>
        <CardText expandable>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

Home.propTypes = {
  heading: React.PropTypes.string.isRequired,
  subheading: React.PropTypes.string.isRequired,
};

function selector(state) {
  return state.settings.home;
}

export default connect(
  state => selector(state),
  { },
)(Home);
