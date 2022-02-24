import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./app/views/HomePage";
import EpisodeDetail from "./app/views/DetailsEpisode";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/episode/:id" exact component={EpisodeDetail} />
      </Switch>
    </BrowserRouter>
  );
}