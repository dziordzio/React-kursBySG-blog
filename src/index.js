import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

// git init
// git add .
// git commit -m "Initial commit"
// git remote add origin https://github.com/dziordzio/React-kursBySG-blog.git
// git push origin master