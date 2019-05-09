const formatChoiceStructureForComponent = choiceValues =>{
  return choiceValues.map(choice => ({ label: choice.label, value: choice.id }));
};

export default {
  formatChoiceStructureForComponent,
}