import produce from 'immer';

export const INITIAL_STATE = {
  charactersList: [],
};

export default function favoriteCharacters(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@char/ADD_TO_LIST': {
        draft.charactersList.push(action.payload.character);
        break;
      }
      case '@char/EDIT': {
        const { id } = action.payload.character;
        const index = draft.charactersList.findIndex(c => c.id === id);
        draft.charactersList.splice(index, 1);
        draft.charactersList.push(action.payload.character);
        break;
      }
      default:
    }
  });
}
