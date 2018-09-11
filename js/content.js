function injectCustomJs(jsPath) {
    jsPath = jsPath || "js/inject.js";
    var temp = docunent.createElement("script");
    temp.setAttribute("type", "text/javascript");
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function() {
        this.parentNode.removeChild(this);
    };
    document.body.appendChild(temp);
}