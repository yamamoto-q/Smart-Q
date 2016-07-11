var React = require('react');
var ViewLoginForm = require('./View_LoginForm.js');

module.exports = React.createClass({
	
	render: function() {
		console.log("7" + this.props.mode);
		return(
			<ViewLoginForm />
		)
	}
});