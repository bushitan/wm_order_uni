class dbBase{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	KEY_TOKEN = "token"
	KEY_SESSION = "Session"
	
	APP_ID = "5099f520489646d28ce9df352237c059"
	
	// URL = "http://221.7.253.6:9019/Api/Task/TaskHandler.ashx?"
	HOST_URL = "https://wm.51zfgx.com/"
	
	// URL_WORK = "http://221.7.253.6:9019/Api/Task/WorkHandler.ashx?action="
	
	constructor(){}
	
	/********瀑布流模块*********/
	checkIsMore(page,limit,count){		
		// 版本2
		if (count < limit)
			return false
		else 
			return true
	}
	
	/**
	 * @method 初始化瀑布流
	 */
	listInit(self){
		self.setData({
			page : 1,
			limit : 10,
			lock : false,
			isMore:true,
			list:[],
		})
	}
	
	/**
	 * @method 更新
	 */
	listUpdate(self,res){
		// debugger
		var page = self.$data.page
		var limit = self.$data.limit
		// var count = res.count || res.data.length
		var count = res.data.length
		var oldList = self.$data.list
		var newList = res.data
		
		var isMore = this.checkIsMore(page,limit,count)
		self.setData({
			page:self.$data.page + 1,
			lock:false,
			list: oldList.concat(newList) ,
			isMore:isMore,
		})					
	}
	
	/**************计算************/
	accDiv(arg1,arg2){
	  let t1=0,t2=0,r1,r2;
	  try{t1=arg1.toString().split(".")[1].length}catch(e){}
	  try{t2=arg2.toString().split(".")[1].length}catch(e){}
	  r1=Number(arg1.toString().replace(".",""))
	  r2=Number(arg2.toString().replace(".",""))
	  return (r1/r2)*Math.pow(10,t2-t1);
	}
	
	
	/********基础请求*********/
	
	// 封装基础的请求
    base(options){
        return new Promise((resolve, reject) => {
            var data = options.data || {}
			for (var i in data){
				if (data[i] == undefined)
					data[i] = ""
			}					
            // data["Session"] = wx.getStorageSync(this.KEY_SESSION)
			data["Session"] = "5IRWgui7bOhSrOKtUHtIF3N/Y7M1ILZgzBEF18+8mmf/AEpFZioD+Mppww5sqj7DBFFuDVEOeWQFvndtbTwTr042KkAPyMUxv5Wnbfbj9VFPch3DIl+gFMBGA/h/T4QqLFhjk9HiUEEht8lNcwD/vz5lmgxAk//ReJ6sUR2LlO57YeWxAnqeRhxybWvNJmmaErN+h1TH1m+qbJF6AVKIfcX/WhqFfKen8ALJLyloEcFYOdfaU2Swdupb/SAzSjJwurVU3trZowy01YeWVX8dC5ju9gjNBddea1+RRhZt6fEJx0JLjP6J06Jnwgsv2SNjAqzBr62kkNaj2VmYV1udfEIMFtnIoVU3ufPNcUMKOmbAWhZbk2H6Cbl+WJKlety46CeWkgg+OFo="
			 
		

			// debugger
			// console.log(uni.getStorageSync("token"))
            uni.request({
                url: options.url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Access-Control-Allow-Origin':true,
					// 'Authorization': 'Bearer ' + uni.getStorageSync("token")
                },
                data: data,
                success(res) {
                    resolve(res)
                },
                fail(res) {
                    console.log(res)
                    reject(res)
                },
            })
        })
    }
	
}
module.exports = dbBase

// export default dbBase;