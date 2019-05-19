import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./include";
import {
  StreamList,
  StreamShow,
  StreamCreate,
  StreamEdit,
  StreamDelete
} from "./streams";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
};

export default App;
