import * as React from "react";
import * as ReactDOM from "react-dom";

import { GenerateMap } from "./components/GenerateMap";

ReactDOM.render(
    <GenerateMap  lon={63.4281195} lat={-20.2885533} />,
    document.getElementById("root")
);