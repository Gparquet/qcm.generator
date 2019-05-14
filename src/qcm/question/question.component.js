import React from 'react';
import { shape, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  classes: shape().isRequired,
  title: string.isRequired,
  label: string.isRequired,
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const questionComponent = (props) => {
  const { classes, title, label } = props;
  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          {label}
        </Typography>
      </Paper>
    </>
  );
};

questionComponent.propTypes = propTypes;
export default withStyles(styles)(questionComponent);
