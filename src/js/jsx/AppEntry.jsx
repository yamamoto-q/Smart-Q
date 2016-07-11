if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    console.log(7);
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    console.log(10);
    onDeviceReady();
}

/*
function onDeviceReady() {
    console.log("onDeviceReady");
    $(document).ready(function() {
        $("#TestLogion").click(function(event) {

            console.log("TestLogion");

            var iframe = document.getElementById('SandboxedApp');
            var message = {
                command: 'render',
                context: { thing: 'world' }
            };
            iframe.contentWindow.postMessage(message, '*');
        });

            $("#toParent").click(function(event) {
    	console.log("toParent");
    	console.log("parent");
    	parent.postMessage("Hello","*");
    });
    });



    window.addEventListener('message', function(event) {
    	console.log(event);
    });
}
*/

var React = require('react');
var ReactDOM = require('react-dom');
var ViewLoginForm = require('./View_LoginForm.js');
var ViewSmartQApp = require('./View_SmartQApp.js');

function onDeviceReady() {
    $(document).ready(function() {
        var mode = $('#App').data('mode');
        //console.log(mode);
        if(mode && mode == "sandbox-parent"){
            ReactDOM.render(
                <div>
                    <ViewLoginForm>Parent</ViewLoginForm>
                    <iframe id="SandboxedApp" src="index.html" width="300" height="200"></iframe>
                </div>,
                document.getElementById('App')
            );
        }else{
            ReactDOM.render(
                <ViewSmartQApp mode="hello" />,
                document.getElementById('App')
            );
        }
    });

}