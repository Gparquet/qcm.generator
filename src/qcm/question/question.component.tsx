import React, {SFC, ChangeEvent} from 'react';
import {withStyles, Theme, createStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Choice, ChoiceComponent} from './choice';
import {MultipleChoice, MultipleChoiceComponent} from './multipleChoice';
import {QuestionComponentType} from './question.type';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

type MultipleOrSingleChoiceType = {
  choices: Choice[] | MultipleChoice[];
  type: string;
  onChange: (event: ChangeEvent<{}>, value: boolean | string) => void;
};

const MultipleOrSingleChoice: SFC<MultipleOrSingleChoiceType> = props => {
  const {type, choices, onChange} = props;
  if (type !== 'simpleChoice') {
    return (
      <MultipleChoiceComponent
        onChange={onChange}
        choices={choices as MultipleChoice[]}
      />
    );
  }

  return <ChoiceComponent onChange={onChange} choices={choices} />;
};

const QuestionComponent: SFC<QuestionComponentType> = props => {
  const {classes, title, label, objectChoice, onChange} = props;
  const {choices, type} = objectChoice;
  return (
    <>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">{label}</Typography>
        <MultipleOrSingleChoice
          choices={choices}
          type={type}
          onChange={onChange}
        />
      </Paper>
    </>
  );
};

export default withStyles(styles)(QuestionComponent);
