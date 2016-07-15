var React = require('react');
var ViewLoginForm = require('./View_LoginForm.js');

var Ctrl_Strage = require('./Ctrl_Strage.js');

module.exports = React.createClass({
	getInitialState: function getInitialState() {
		return {
			mode: this.props.mode
		}
	},
	render: function() {
		return(
			<ViewLoginForm mode={this.props.mode}/>
		)
	}
});