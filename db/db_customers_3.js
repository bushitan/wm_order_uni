
import fahter from './db_categories_2.js'
class son extends fahter{	
	
	constructor(){
		super()
	}
   /**
     * @method 1 用户登录
     * @return 
     *      code
	  * 	session
	  * 	AppId
     */
    customerGetToken() {
        return new Promise((resolve, reject) => {
            var that = this 
            uni.login({
                success(e) {
                    that.base({
                        url: that.HOST_URL + "api/gettoken/",
                        data: {
                            Code:e.code,
                            AppId: that.APP_ID,
                        },
                        method: "POST",
                    }).then(res => {
                        uni.setStorageSync(that.KEY_SESSION, res.data.data.session) //session
                        uni.setStorageSync(that.KEY_SN, "10" + res.data.data.sn)  //序列号
                        resolve(true)
                    })
                    .catch(res => reject(false))
                },
            })
        })
    }
	
	/**
	 * @method 2 获取指定用户信息
	 * @param 
	 * 		Id
			Guid
			WxOpenId
			AppId
			Session
	 */
	customerGetDetail(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/getdetail/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	
	/**
	 * @method 3 添加客户收货地址
	 * @param 
	 */
	customerAddShipAddr(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/customer/addshipaddr/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 4 更新客户收货地址
	 * @param 
	 */
	customerUpdateShipAddr(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/customer/updateshipaddr/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 5 获取客户收货地址
	 * @param 
	 */
	customerShipAddrs(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/customer/shipaddrs/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	/**
	 * @method 6 导入地址数据
	 * @param 
	 */
	customerParseAddrs(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/parse/addr/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	
	/**
	 * @method 7 更新数据
	 * @param 
	 */
	customerUpdate(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/customer/update/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}

}
module.exports = son