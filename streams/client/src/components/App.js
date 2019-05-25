import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Header } from "./include";
import {
  StreamList,
  StreamShow,
  StreamCreate,
  StreamEdit,
  StreamDelete
} from "./streams";

import { ROUTES } from "../constants";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Route path={ROUTES.LANDING} exact component={StreamList} />
        <Route path={ROUTES.STREAM_SHOW} exact component={StreamShow} />
        <Route path={ROUTES.STREAM_CREATE} exact component={StreamCreate} />
        <Route path={ROUTES.STREAM_EDIT} exact component={StreamEdit} />
        <Route path={ROUTES.STREAM_DELETE} exact component={StreamDelete} />
      </Router>
    </React.Fragment>
  );
};

export default App;
