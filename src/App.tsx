import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { UnitViewer } from "./debugging/UnitViewer";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/view/units" component={UnitViewer} />
    </Switch>
  );
};
