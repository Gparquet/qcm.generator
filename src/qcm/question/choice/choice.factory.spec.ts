import choiceFactory from './choice.factory';
import choicesNotFormatted from './mocks/choices_of_question_not_formatted';
import choicesFormatted from './mocks/choices_of_question_formatted';

describe('choice factory tests', () => {
  test('should return choice object formatted for component when call formatChoiceStructureForComponent function', () => {
    const choiceFormattedResult = choiceFactory.formatChoiceStructureForComponent(
      choicesNotFormatted,
    );
    expect(choiceFormattedResult).toEqual(choicesFormatted);
  });
});
