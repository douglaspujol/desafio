import React from 'react';
import { Switch } from 'react-router-dom';

/**
 * Pages
 */
import Route from './routes';
import Main from '../pages/Main/index';
import InfoCharacter from '../pages/InfoCharacter/index';
import EditInfoCharacter from '../pages/EditInfoCharacter/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/details/:id" exact component={InfoCharacter} />
      <Route path="/details/:id/edit" exact component={EditInfoCharacter} />
    </Switch>
  );
}
