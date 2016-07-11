if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}

var React = require('react');
var ReactDOM = require('react-dom');

var ViewSmartQApp = require('./View_SmartQApp.js');

function onDeviceReady() {
    $(document).ready(function() {
        var mode = $('#App').data('mode');

        console.log(location.pathname);

        if (location.pathname == "/www/ChromeAppLogin.html") {
            //　Sandbox
            // Sandbox （sandbox.html）を iFrame で開く
            // ChromeAppLogin.html は background.js　で指定
            window.addEventListener('message', function(event) {
                console.log('message');
                console.log(event);
            });
            ReactDOM.render(
                <div>
                    <iframe id="SandboxedApp" src="sandbox.html" width="300" height="200"></iframe>
                </div>,
                document.getElementById('App')
            );

        }else if(location.pathname == "/www/sandbox.html"){
            // Sandbox
            // Sandbox モードでアプリを開く
            ReactDOM.render(
                <ViewSmartQApp mode="sandbox"/>,
                document.getElementById('App')
            );
            
        }else{
            // Nomal
            // 通常 モードでアプリを開く
            ReactDOM.render(
                <ViewSmartQApp mode="nomal"/>,
                document.getElementById('App')
            );
        }
    });

}