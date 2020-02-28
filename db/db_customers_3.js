
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
                        uni.setStorageSync(that.KEY_SESSION, res.data.session) //session
                        uni.setStorageSync(that.KEY_SN, "10" + res.data.sn)  //序列号
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

}
module.exports = son