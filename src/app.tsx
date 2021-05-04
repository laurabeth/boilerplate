import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundry";

const App = () => {
	return (
		<ErrorBoundary>
			<div>Boilerplate</div>
		</ErrorBoundary>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
