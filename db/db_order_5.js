
import fahter from './db_order_item_4.js'
class son extends fahter{	
	
	constructor(){
		super()
	} 
	
	/**
	 * @method 1 获取订单列表
	 * @param 
		  "Ids": [0],
		  "Limit": 0,
		  "Page": 0,
		  "SinceId": 0,
		  "Fields": "string",
		  "CreatedAtMin": "2020-02-23T12:51:12.015Z",
		  "CreatedAtMax": "2020-02-23T12:51:12.015Z",
		  "Status": 10,
		  "PaymentStatus": 10,
		  "ShippingStatus": 10,
		  "CustomerId": 0,
		  "AppId": "string",
		  "Session": "string"
	 */
	orderGetList(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/getlist/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 2 获取订单数
	 * @param 
		CreatedAtMin
		CreatedAtMax
		Status
		PaymentStatus
		ShippingStatus
		CustomerId
		AppId
		Session

	 */
	orderGetCount(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/count/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 3 获取订单详情
	 * @param 
	 * 
		OrderId
		Fields
		AppId
		Session
	 */
	orderGetDetail(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/getdetail/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 4 获取某一客户的所有订单
	 * @param 
			 OrderId
			 Fields
			 AppId
			 Session
	 */
	orderGetCustomerOrder(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/getcustomerorder/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	
	/**
	 * @method 5 生成订单
	 * @param 
	 */
	orderCreate(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/create/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
	/**
	 * @method 6 删除订单
	 * @param 
			 OrderId
			 AppId
			 Session
	 */
	orderCreate(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/del/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}

	/**
	 * @method 7 更新订单
	 * @param 
			 OrderId
			 AppId
			 Session
	 */
	orderUpdate(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/update/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}
}
module.exports = son