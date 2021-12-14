/** 导航栏配置 */

module.exports = [
    {text: 'Home1', link: '/', icon: 'reco-tag'},
    {text: 'Vue', link: '/vue/'},
    {text: 'Article', link: '/article/'},
    {
        text: '更多',
        items: [
            {text: 'About1', link: '/about/about1'},
            {text: 'About2', link: '/about/about2'}
            // {
            //     text: '分组1',
            //     items: [
            //         { text: 'About1', link: '/about1' },
            //     ]
            // },
        ]
    },
    {text: 'BaiDu', link: 'https://www.baidu.com/', target: '_blank'}
];

// /** 禁用 */
// false

