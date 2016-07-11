"use strict";

var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		console.log(localStorage);
		if (typeof localStorage === "undefined") {
			return React.createElement(
				"div",
				null,
				"Chorome App"
			);
		} else {
			return React.createElement(
				"div",
				null,
				"App"
			);
		}
	}
});
