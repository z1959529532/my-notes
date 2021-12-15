const headConfig = require('./config/head-config.js');
const pluginsConfig = require('./config/plugins-config.js');
const navConfig = require('./config/nav-config.js');
const sidebarConfig = require('./config/sidebar-config.js');

// 配置文件
module.exports = {
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        
        /** 4、logo图片 */
        logo: '/assets/imgs/header.png',
    
        /** 4、导航栏 */
        nav: navConfig,
    
        /** 5、侧边栏 */
        sidebar: sidebarConfig,  // 自定义侧边栏
        sidebarDepth: 2,         // 标题深度
        subSidebar: 'auto',      // reco自动生成子侧边栏，原 sidebar 仍然兼容
    
        /** 7、更新时间 */
        lastUpdated: '更新时间'
    },
    
    title: '雨生灬wait',
    description: 'Welcome to vuePress my-notes',
    // port: '8787',
    author: "@Z",
    authorAvatar: '/assets/imgs/header.png',  // 设置头像
    /** 6、SEO配置  9、pwa例子配置 */
    head: headConfig,
    
    /** 插件 */
    plugins: pluginsConfig,
    
    /** 8、发布github */
    /** 配置base */
    base: '/my-notes/',
    
    /** 博客配置 */
    blogConfig: {
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: "标签", // 默认文案 “标签”
        },
    }
};