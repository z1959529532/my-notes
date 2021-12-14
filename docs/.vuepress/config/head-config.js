module.exports = [
    ['link', {rel: 'icon', href: '/assets/imgs/favicon.ico'}],
    ['meta', {name: 'author', content: 'zys'}],
    ['meta', {name: 'keywords', content: '使用vuepress'}],
    
    /** 9、pwa插件 */
    
    /** 19、移动端优化 */
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    
    /** 19、百度统计 */
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?a3faffe2accd16254660da0bf72e96e1";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    `]
];