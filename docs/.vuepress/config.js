const headConfig = require('./config/head-config.js');
const pluginsConfig = require('./config/plugins-config.js');
const navConfig = require('./config/nav-config.js');
const sidebarConfig = require('./config/sidebar-config.js');

// 配置文件
module.exports = {
    theme: 'reco',
    themeConfig: {
        // type: 'blog',
        
        /** 4、logo图片 */
        logo: '/assets/imgs/header.png',
    
        /** 4、导航栏 */
        nav: navConfig,
    
        /** 5、侧边栏 */
        sidebar: sidebarConfig,
    
        /** 7、更新时间 */
        lastUpdated: '更新时间'
    },
    
    /** 6、SEO配置  9、pwa例子配置 */
    title: '雨生灬wait',
    description: 'zys笔记',
    port: '8787',
    head: headConfig,
    
    /** 插件 */
    plugins: pluginsConfig,
    
    /** 8、发布github */
    /** 配置base */
    base: '/my-notes/'
};