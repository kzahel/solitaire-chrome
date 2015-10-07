

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    // background page...
    var W=920
    var H=520
    var opts = {
        id:'index',
        innerBounds: {
            width:W,
            height:H,
            minWidth: W-20,
            minHeight: H-20
        }
    }
    chrome.app.window.create('index.html', opts, function(){})
})
