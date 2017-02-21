import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 900,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class NotFound extends PureComponent {

  render() {
    return (
      <div>
        <Paper style={style} zDepth={5} >

          <p>You can try starting again from our <a href="/">home page</a>!</p>
        </Paper>
      </div>
    );
  }
}

export default NotFound;
