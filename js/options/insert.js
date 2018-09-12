$.ajax({
    type: "GET",
    url: "https://yhtx1997.gitee.io/video_parsing_api/",
    success: function(response) {
        console.log(response);
        var response = JSON.parse(response);
        console.log(response);
        if (response.ret && response.title === "接口数据") {
            var response = response.data;
            var jiekou = $("#jiekou");
            for (x in response) {
                var data = response[x]
                var str = "<option value='" + data.href + "'>" + data.title + "</option>"
                $(jiekou).append(str);
            }
        }
    }
});