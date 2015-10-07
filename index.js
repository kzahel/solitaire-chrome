var webview = document.querySelector("webview");

function updateWebviews() {
    webview.style.height = document.documentElement.clientHeight + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
};

window.onload = updateWebviews;
window.onresize = updateWebviews;
