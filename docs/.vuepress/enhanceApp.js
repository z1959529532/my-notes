

export default ({ router }) => {
    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                // console.log("上报百度统计", to.fullPath);
            }
        }
        next();
    });
};