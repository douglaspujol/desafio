import reducer, {
  INITIAL_STATE,
} from '../../store/modules/favoritsCharacters/reducer';
import { addCharacterToList } from '../../store/modules/favoritsCharacters/actions';

describe('FavoritsCharacters reducer actions', () => {
  it('@char/ADD_TO_LIST', () => {
    const character = {
      id: 1009146,
      name: 'Abomination (Emil Blonsky)',
      description:
        'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
      modified: '2012-03-20T12:32:12-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
        extension: 'jpg',
      },
    };
    const state = reducer(INITIAL_STATE, addCharacterToList(character));

    expect(state).toStrictEqual({
      charactersList: [
        {
          id: 1009146,
          name: 'Abomination (Emil Blonsky)',
          description:
            'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
          modified: '2012-03-20T12:32:12-0400',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
            extension: 'jpg',
          },
        },
      ],
    });
  });

  /*  it('@char/EDIT', () => {
    const id = '1009146';
    const name = 'New name';
    const description = 'New description';

    const state = reducer(INITIAL_STATE, editCharacter(id, name, description));

    expect(state).toStrictEqual({
      charactersList: [
        {
          id: 1009146,
          name: { name },
          description: { description },
          modified: '2012-03-20T12:32:12-0400',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
            extension: 'jpg',
          },
        },
      ],
    });
  }); */
});
