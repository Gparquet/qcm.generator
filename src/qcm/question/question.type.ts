import Choice from './choice/choice.type';

export default interface Question {
  id: string;
  label: string;
  choices: Choice[];
}
