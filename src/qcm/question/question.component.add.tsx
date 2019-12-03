import React, {SFC, ChangeEvent, MouseEvent} from 'react';
import {
  withStyles,
  createStyles,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  FormControlLabel,
  Fade,
  Backdrop,
  Theme,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Choice, ChoiceComponent} from './choice';
import {MultipleChoice, MultipleChoiceComponent} from './multipleChoice';

const styles = (theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 15,
      border: '2px solid #3f51b5',
      boxShadow: theme.shadows[5],
      width: 550,
    },
  });

interface QuestionCommonComponentType {
  onChange: (
    event: ChangeEvent<HTMLInputElement> | React.ChangeEvent<{}>,
    value?: string,
  ) => void;
  type: string;
}
interface QuestionAddComponentType extends QuestionCommonComponentType {
  open: boolean;
  classes: any;
  choices?: Choice[] | MultipleChoice[];
  onClick: (event: MouseEvent<HTMLElement>) => void;
  onClose: (event: MouseEvent<HTMLElement>) => void;
}

const AddChoices = props => {
  const {onChange, choice, id} = props;

  return (
    <>
      <TextField
        id="id"
        label="Read Only"
        value={id}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="choice"
        className="choice__input"
        label="Choice"
        value={choice}
        onChange={onChange}
        margin="normal"
        variant="outlined"
      />
    </>
  );
};

const QuestionInformation: SFC<QuestionCommonComponentType> = props => {
  const {type, onChange} = props;
  return (
    <>
      <h2 id="modal-title">Question informations</h2>
      <div id="modal-description-question" className="description-question">
        <RadioGroup
          aria-label="Type"
          name="question-type"
          value={type}
          onChange={onChange}
        >
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="Single choice"
          />
          <FormControlLabel
            value="multiple"
            control={<Radio />}
            label="Multiple choice"
          />
        </RadioGroup>
      </div>
    </>
  );
};

const LoadChoices = (
  choices: Array<Choice | MultipleChoice>,
  onChange: ChangeEvent<HTMLInputElement> | React.ChangeEvent<{}>,
) => {
  if (choices) {
    return <></>;
  }

  return (choices as Array<Choice | MultipleChoice>).map(
    (value: Choice | MultipleChoice, index: number) => (
      <AddChoices key={`choice_${index}`} onChange={onChange} choice={value} />
    ),
  );
};

const QuestionAddComponent: SFC<QuestionAddComponentType> = props => {
  const {classes, onChange, onClick, onClose, type, choices, open} = props;
  return (
    <div className="question-add">
      <div id="informations" className="question-add-information">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={onClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <QuestionInformation onChange={onChange} type={type} /> */}
              <div>
                <LoadChoices choices={choices} onChange={onchange} />
              </div>
              <Fab
                name="addChoice"
                size="small"
                color="primary"
                aria-label="add"
                onClick={onClick}
              >
                <AddIcon />
              </Fab>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default withStyles(styles)(QuestionAddComponent);
