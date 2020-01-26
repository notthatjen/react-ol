import * as React from "react";
import * as ReactDOM from "react-dom";

import { GenerateMap } from "./components/GenerateMap";

ReactDOM.render(
    <GenerateMap  longitude={63.4281195} latitude={-20.2885533} />,
    document.getElementById("root")
);