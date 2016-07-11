var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log(localStorage);
		if (typeof localStorage === "undefined") {
			return(
				<div>Chorome App</div>
			)
		}else{
			return(
				<div>App</div>
			)
		}
	}
});