export function addCharacterToList(character) {
  return {
    type: '@char/ADD_TO_LIST',
    payload: { character },
  };
}

export function editCharacter(character) {
  return {
    type: '@char/EDIT',
    payload: { character },
  };
}
