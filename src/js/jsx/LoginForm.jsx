var React = require('react');

module.exports = React.createClass({
	onClick:function(){
		if (typeof localStorage === "undefined") {
			parent.postMessage("Hello","*");
			console.log("postMessage...");
		}else{
			console.log("nomal save");
		}
	},
	render: function() {
		return(
			<div>LoginForm
				<a onClick={this.onClick}>Test</a>
			</div>
		)
	}
});