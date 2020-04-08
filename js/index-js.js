

window.onload = function () {
    var url = "../homework/js/data.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
    	
        var json = JSON.parse(request.responseText);
        if (json.code == 1) {

            console.log(json);

            // 循环读取数据，并写入html
            for(var i=0;i<json.result.length;i++){
                console.log(json.result[i].title);
                $(document).ready(function(){
                    $(".title").append("<div class='index-Info-bar'><span class='span-title'>"+json.result[i].title
                        +"</span><div  class='logo'><img id='logo' src = '" +json.result[i].img
                        +"'class='images'></div><span class='time'>"+json.result[i].time
                        +"</span><span class='status'>"+json.result[i].status_DISPLAY+"</span></div>")
                })
            }
        }
    }
}
