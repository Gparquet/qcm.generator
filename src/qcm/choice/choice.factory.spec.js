import choiceFactory from './choice.factory';
import choices from './mocks/choices_of_question';

describe('choice factory tests', ()=>{
  test('should return choice object formatted for component when call formatChoiceStructureForComponent function', ()=>{
    const choiceFormatted = choiceFactory.formatChoiceStructureForComponent(choices);

    expect(choiceFormatted).toEqual([{
      value: "5f67c896-77b4-4b9b-bf19-fb2c8e274c68",
      label: "Internal"
    },
      {
        value: "8762b6dc-9fe3-4c5d-b810-2030e6b36fb5",
        label: "Virtual"
      },
      {
        value: "b4d2d5e5-7ece-4dbd-b375-67389b7c4f84",
        label: "Override"
      },
      {
        value: "72010226-6d1f-4354-b57d-15953292dbd6",
        label: "Sealed"
      },
      {
        value: "72010226-6d1f-4354-b57d-15953292dbd6",
        label: "I don't know"
      }]);
  })
});