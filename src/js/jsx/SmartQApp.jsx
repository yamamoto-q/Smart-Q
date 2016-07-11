var React = require('react');

module.exports = React.createClass({
	render: function() {
		console.log(parent);
		console.log(this.props.mode);
		if(typeof this.props.mode === "undefined"){
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