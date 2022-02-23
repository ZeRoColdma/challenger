import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./app/views/HomePage/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}