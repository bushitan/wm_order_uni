
import fahter from './db_order_5.js'
class son extends fahter{	
	
	constructor(){
		super()
	} 
	
	/**
	 * @method 1 获取所有产品列表
	 * @param 
	    "Ids": [
			0
		  ],
		  "SinceId": 0,
		  "Fields": "string",
		  "CreatedAtMin": "2020-02-23T12:56:03.359Z",
		  "CreatedAtMax": "2020-02-23T12:56:03.359Z",
		  "UpdatedAtMin": "2020-02-23T12:56:03.359Z",
		  "UpdatedAtMax": "2020-02-23T12:56:03.359Z",
		  "PublishedStatus": true,
		  "VendorName": "string",
		  "CategoryId": 0
	 */
	productGetList(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/products/getlist/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 2 获取指定产品详情
	 * @param 
		id
		fields
	 */
	productGetDetail(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/products/getdetail/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
}
module.exports = son