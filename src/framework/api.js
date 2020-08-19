class API {
    static baseUrl = 'https://mzxh.top:9090/';
    static _api = {};
    static token = null;

    static getToken() {
        if (this.token === null) {
            this.token = uni.getStorageSync('token');
        }
        return this.token
    }

    static config(url, method, config = null) {
        this._api.url = this.baseUrl + url;
        this._api.method = method;

        if (config !== null) {
            this._api.data = config;
        }
        this._api.header = {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': this.getToken()
        }
        if (method === 'GET') {
            this._api.header['Accept'] = 'application/json';
        }

        // uni-app 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。
        return uni.request(this._api);
    }

    static uploadFile() {
        uni.uploadFile({
            // 开发者服务器url
            url: "String",
            // 上传资源路径
            filePath: "String",
            // 文件对应的key，开发者在服务器端通过key可以查找到的内容
            name: "String"
        })
    }


    static get(url, config = null) {
        return this.config(url, 'GET', config);
    }

    static post(url, config = null) {
        return this.config(url, 'POST', config);
    }

    static put(url, config = null) {
        return this.config(url, 'PUT', config);
    }

    static delete(url, config = null) {
        return this.config(url, 'DELETE', config);
    }


}


export {
    API
}
