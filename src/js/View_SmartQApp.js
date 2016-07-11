'use strict';

var React = require('react');
var ViewLoginForm = require('./View_LoginForm.js');

module.exports = React.createClass({
	displayName: 'exports',


	render: function render() {
		console.log("7" + this.props.mode);
		return React.createElement(ViewLoginForm, null);
	}
});
