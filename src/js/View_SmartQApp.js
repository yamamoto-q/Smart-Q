"use strict";

var React = require('react');

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		if (typeof this.props.mode == "undefined") {
			return React.createElement(
				"div",
				null,
				"App"
			);
		} else {
			return React.createElement(
				"div",
				null,
				"Chorome App"
			);
		}
	}
});