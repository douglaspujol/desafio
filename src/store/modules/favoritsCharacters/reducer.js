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
        const { id, name, description } = action.payload;

        const index = draft.charactersList.findIndex(e => e.id === Number(id));

        draft.charactersList[index].name = name;
        draft.charactersList[index].description = description;
        break;
      }
      default:
    }
  });
}
