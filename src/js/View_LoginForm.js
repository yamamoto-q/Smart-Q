'use strict';

var React = require('react');
var Ctrl_Strage = require('./Ctrl_Strage.js');

module.exports = React.createClass({
	displayName: 'exports',

	componentDidMount: function componentDidMount() {
		Ctrl_Strage.Store.addChangeSavedDataListener(function () {
			console.log("addLoadedListener");
			console.log(Ctrl_Strage.Store.getSavedValue());
		});

		Ctrl_Strage.Action.load();
	},
	onClick: function onClick() {
		Ctrl_Strage.Action.save("test", "Hello 2");
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				React.createElement(
					'a',
					{ onClick: this.onClick },
					'Test'
				)
			)
		);
	}
});
