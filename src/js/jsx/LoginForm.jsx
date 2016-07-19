var React = require('react');
var QUser = require('./QUser.js');

var Ctrl_QUser = require('./Ctrl_QUser.js');

var View_Middle = require('./Middle.js');

module.exports = React.createClass({
	getInitialState: function getInitialState() {
		return {
			qUsers:[]
		};
	},
	componentDidMount: function componentDidMount() {
		var self = this;
		Ctrl_QUser.Store.addQUsersChangeListener(function () {
			console.log('addQUsersChangeListener');
			var qUsers = Ctrl_QUser.Store.getQUsers();
			console.log(qUsers);
			if (self.isMounted()) {
				self.setState({
					qUsers: qUsers
				});
			}
		});

		//ModelsCtrl.Action.getAllProcessModelInfos();
	},
	render: function() {
		return(
			<View_Middle>
				<p>
					<a className="btn">Test</a>
				</p>
			</View_Middle>
		)
	}
});