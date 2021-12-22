const headConfig = require('./config/head-config.js');
const pluginsConfig = require('./config/plugins-config.js');
const navConfig = require('./config/nav-config.js');
const sidebarConfig = require('./config/sidebar-config.js');

// 配置文件
module.exports = {
    theme: 'reco',  // 设置使用reco主题

    themeConfig: {
        type: 'blog',  // blog主题（reco主题）
        author: "zys",  // 右侧用户名（reco主题）
        authorAvatar: '/assets/imgs/header.png',  // 右侧头像（reco主题）
        startYear: '2019',
        
        /** 4、logo图片 */
        logo: '/assets/imgs/header.png',
    
        /** 4、导航栏 */
        nav: navConfig,
    
        /** 5、侧边栏 */
        sidebar: sidebarConfig,  // 自定义侧边栏
        sidebarDepth: 10,         // 标题深度
        subSidebar: 'auto',      // reco自动生成子侧边栏，原 sidebar 仍然兼容
    
        /** 7、更新时间 */
        lastUpdated: '更新时间'
    },
    
    title: '灬wait',
    description: 'Welcome to vuePress my-notes',
    // port: '8787',
    /** 6、SEO配置  9、pwa例子配置 */
    head: headConfig,
    
    /** 插件 */
    plugins: pluginsConfig,
    
    /** 8、发布github */
    /** 配置base */
    base: '/my-notes/',
    
    /** 右侧分类和标签（reco主题） */
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: "分类", // 默认文案 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: "标签", // 默认文案 “标签”
        },
    }
};