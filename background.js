chrome.contextMenus.create({
    id: "youjian",
    title: "点击解析",
    onclick: genericOnClick
});
chrome.browserAction.onClicked.addListener(genericOnClick);

function genericOnClick() {
    chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true, lastFocusedWindow: true }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        chrome.tabs.create({
            url: "http://jx.598110.com/index.php?url=" + url
        });
        console.log("当前地址为：" + ur)
    });

    // chrome.runtime.sendNativeMessage('com.moonsoft.moonplayer', { text: url });
};