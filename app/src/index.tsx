import ReactDOM from "react-dom";
import React from "react";

import { foo } from "@elado/pkg";

console.log('foo: ', foo);

ReactDOM.render(<div>hello {foo('world')}</div>, document.getElementById("app"));
