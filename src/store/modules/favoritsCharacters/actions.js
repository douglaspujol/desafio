export function addCharacterToList(character) {
  return {
    type: '@char/ADD_TO_LIST',
    payload: { character },
  };
}

export function editCharacter(id, name, description) {
  return {
    type: '@char/EDIT',
    payload: { id, name, description },
  };
}
