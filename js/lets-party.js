var initConfig = {
    url : '192.168.19.99', // 检测获取目标网站
    fuckMode : 'on'
}
chrome.storage.sync.get(initConfig, function(items) {
    initConfig = items
});
console.info(initConfig)

if(window.location.host == initConfig.url){
    console.info("访问路径匹配，开始初始化脚本")
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('js/fuck.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}