// 初始化
// 默认配置
var initConfig = {
    url : '192.168.19.99', // 检测获取目标网站
    fuckMode : 'on'
}
$(function(){
    // 加载chrome自定义配置
    chrome.storage.sync.get(initConfig, function(items) {
        $('input[name="switch"][value="'+items.fuckMode+'"]').attr("checked",true)
        $('#url').val(items.url)
        initConfig = items
    });

})

$('#save').click(function(){
    let _listener = {
        url : $('#url').val(),
        fuckMode : $('input[name=switch]:checked').val()
    }
    chrome.storage.sync.set(_listener,function(){
        console.info("储存新的值,url:"+_listener.url)
        console.info("储存新的值,host:"+_listener.fuckMode)
        $('#url').val(_listener.url)
        $('input[name="switch"][value="'+_listener.fuckMode+'"]').attr("checked",true)
        initConfig = _listener

    })
    alert("配置已保存")
    console.info(initConfig)
})


