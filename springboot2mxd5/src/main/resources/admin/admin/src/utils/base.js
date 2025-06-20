const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2mxd5/",
            name: "springboot2mxd5",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "企业内部小型网络管理系统的设计与实现"
        } 
    }
}
export default base
