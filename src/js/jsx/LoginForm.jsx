var React = require('react');
var Ctrl_Strage = require('./Ctrl_Strage.js');

var QUser = require('./QUser.js');

module.exports = React.createClass({
	componentDidMount: function componentDidMount() {
		Ctrl_Strage.Store.addChangeSavedDataListener(function(){
			console.log("addLoadedListener");
			console.log(Ctrl_Strage.Store.getSavedValue());
		});

		Ctrl_Strage.Action.load();
	},
	onClick:function(){
		Ctrl_Strage.Action.save("test", "Hello 2");
	},
	render: function() {
		return(
			<div>
				<p>
					<a onClick={this.onClick}>Test</a>
				</p>
			</div>
		)
	}
});