
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
			uni.showLoading({title:"加载中"})
			this.base({url: this.HOST_URL +  "api/orders/getlist/",data: data,})
			.then(res => {
				uni.hideLoading()
				resolve(res.data)
			})
			.catch(res => {
				uni.hideLoading()
				reject(res)
			})
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
			uni.showLoading({title:"加载中"})
			this.base({url: this.HOST_URL +  "api/orders/getdetail/",data: data,})
			.then(res => {
				uni.hideLoading()
				resolve(res.data)
			})
			.catch(res => {
				uni.hideLoading()
				reject(res)
			})
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
	 * @method 6 直接下单
	 * @param 
			 OrderId
			 AppId
			 Session
	 */
	orderGen(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/gen/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		// 	var data = {
		// 	  "code": 0,
		// 	  "msg": "数据获取成功",
		// 	  "data": {
		// 		"id": 33,
		// 		"store_id": 1,
		// 		"pick_up_in_store": false,
		// 		"pickup_address": null,
		// 		"order_discount": 0,
		// 		"order_total": 1800,
		// 		"refunded_amount": 0,
		// 		"reward_points_were_added": false,
		// 		"checkout_attribute_description": "Gift wrapping: No",
		// 		"created_on_utc": "2020-02-28 02:34:10",
		// 		"ship_method": "Ground",
		// 		"shipping_status_val": 20,
		// 		"shipping_status": "未发货",
		// 		"ship_address": {
		// 		  "Id": 130,
		// 		  "PhoneNumber": 15277126678,
		// 		  "name": "丰丰",
		// 		  "addr_detail": "广西南宁",
		// 		  "company": null,
		// 		  "fax_number": ""
		// 		},
		// 		"payment_status_val": 10,
		// 		"payment_status": "未付款",
		// 		"payment_method_systemName": "Payments.WeixinPay",
		// 		"paid_dateutc": null,
		// 		"order_status": "未处理",
		// 		"order_status_val": 10,
		// 		"order_attr_desc": "Gift wrapping: No",
		// 		"customer": {
		// 		  "id": 9,
		// 		  "name": null,
		// 		  "wxopenid": "ogWb15ZcOBIxDNWpQNSekEKnCeKM",
		// 		  "username": "ogWb15ZcOBIxDNWpQNSekEKnCeKM",
		// 		  "email": null,
		// 		  "customer_guid": "c54f31f7-a8b2-4aaa-a087-da09305fcbcc"
		// 		},
		// 		"order_items": [
		// 		  {
		// 			"appid": "5099f520489646d28ce9df352237c059",
		// 			"attr_desc": "Color: 粉色",
		// 			"attr": [
		// 			  {
		// 				"id": 16,
		// 				"value": "40"
		// 			  }
		// 			],
		// 			"discount_amount_excl_tax": 0,
		// 			"discount_amount_incl_tax": 0,
		// 			"id": 47,
		// 			"item_weight": 3,
		// 			"original_product_cost": 0,
		// 			"price_excl_tax": 1800,
		// 			"price_incl_tax": 1800,
		// 			"product": {
		// 			  "display_order": 0,
		// 			  "display_stock_availability": true,
		// 			  "display_stock_quantity": true,
		// 			  "full_description": "<p>With fifth-generation Intel Core processors, the latest graphics, and faster flash storage, the incredibly advanced MacBook Pro with Retina display moves even further ahead in performance and battery life.* *Compared with the previous generation.</p>\r\n<p>Retina display with 2560-by-1600 resolution</p>\r\n<p>Fifth-generation dual-core Intel Core i5 processor</p>\r\n<p>Intel Iris Graphics</p>\r\n<p>Up to 9 hours of battery life1</p>\r\n<p>Faster flash storage2</p>\r\n<p>802.11ac Wi-Fi</p>\r\n<p>Two Thunderbolt 2 ports for connecting high-performance devices and transferring data at lightning speed</p>\r\n<p>Two USB 3 ports (compatible with USB 2 devices) and HDMI</p>\r\n<p>FaceTime HD camera</p>\r\n<p>Pages, Numbers, Keynote, iPhoto, iMovie, GarageBand included</p>\r\n<p>OS X, the world's most advanced desktop operating system</p>",
		// 			  "height": 2,
		// 			  "id": 4,
		// 			  "images": [""],
		// 			  "is_free_shipping": true,
		// 			  "is_gift_card": false,
		// 			  "is_recurring": false,
		// 			  "is_rental": false,
		// 			  "is_ship_enabled": true,
		// 			  "length": 3,
		// 			  "width": 2,
		// 			  "min_stock_quantity": 0,
		// 			  "name": "Apple MacBook Pro 13-inch",
		// 			  "price": 1800,
		// 			  "old_price": 0,
		// 			  "sku": "AP_MBP_13",
		// 			  "stock_quantity": 9998,
		// 			  "short_description": "(5袋装)",
		// 			  "tags": [],
		// 			  "special_price": 1800,
		// 			  "weight": 3
		// 			},
		// 			"productId": 4,
		// 			"quantity": 1,
		// 			"rental_enddate_utc": null,
		// 			"rental_startdate_utc": null,
		// 			"unit_price_exclTax": 1800,
		// 			"unit_price_inclTax": 1800
		// 		  }
		// 		]
		// 	  }
		// 	}
		// 	resolve(data.data)
		
		
		})
	}
	
	/**
	 * @method 7 删除订单
	 * @param 
			 OrderId
			 AppId
			 Session
	 */
	orderDel(data) {
		return new Promise((resolve, reject) => {
			this.base({url: this.HOST_URL +  "api/orders/del/",data: data,}).then(res => {resolve(res.data)}).catch(res => reject(res))
		})
	}

	/**
	 * @method 8 更新订单
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