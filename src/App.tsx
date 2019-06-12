import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { UnitViewer } from "./debugging/UnitViewer";
import { CombatViewer } from "./debugging/CombatViewer";

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/view/units" component={UnitViewer} />
      <Route exact path="/view/combat" component={CombatViewer} />
    </Switch>
  );
};
