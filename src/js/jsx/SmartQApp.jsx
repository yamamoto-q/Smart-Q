var React = require('react');

module.exports = React.createClass({
	render: function() {
		if(typeof this.props.mode == "undefined"){
			return(
				<div>App</div>
			)
		}else{
			return(
				<div>Chorome App</div>
			)
		}
		
	}
});