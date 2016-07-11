"use strict";

var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	onClick: function onClick() {
		if (typeof localStorage === "undefined") {
			parent.postMessage("Hello", "*");
			console.log("postMessage...");
		} else {
			console.log("nomal save");
		}
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			"LoginForm",
			React.createElement(
				"a",
				{ onClick: this.onClick },
				"Test"
			)
		);
	}
});
