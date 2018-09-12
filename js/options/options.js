// Saves options to chrome.storage
function save_options() {
    var jiekou = $('#jiekou').val();
    chrome.storage.sync.set({
        defautlt_jiekou: jiekou
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = '已保存最新配置';

        setTimeout(function() {
            status.textContent = '';
        }, 750);


    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value jiekou = 'red' and likesjiekou = true.
    chrome.storage.sync.get({
        defautlt_jiekou: 'http://jx.598110.com/index.php?url='
    }, function(items) {
        $('#jiekou').val(items.defautlt_jiekou);
        var status = document.getElementById('status');
        status.textContent = '已读取最新配置';

        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('read').addEventListener('click',
    restore_options);