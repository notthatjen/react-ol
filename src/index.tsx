import * as React from "react";
import * as ReactDOM from "react-dom";

import { Map, Point } from './components'


export {
    Map,
    Point
}

import Development from "./components/Development";
ReactDOM.render(
    <Development  />,
    document.getElementById("root")
);