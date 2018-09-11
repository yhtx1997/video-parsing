chrome.contextMenus.create({
    id: "youjian",
    title: "点击解析",
    onclick: restore_options
});
chrome.browserAction.onClicked.addListener(restore_options);
chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];
        console.log('存储键“%s”（位于“%s”命名空间中）已更改。' +
            '原来的值为“%s”，新的值为“%s”。',
            key,
            namespace,
            storageChange.oldValue,
            storageChange.newValue);
    }
});


function restore_options() {
    chrome.storage.sync.get({
        defautlt_jiekou: 'http://jx.598110.com/index.php?url='
    }, function(items) {
        var j = items.defautlt_jiekou;
        open_new_tab(j);
    });
}

function open_new_tab(jiekou) {
    chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true, lastFocusedWindow: true }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        chrome.tabs.create({
            url: jiekou + url
        });
        console.log("当前地址为：" + url)
    });
}