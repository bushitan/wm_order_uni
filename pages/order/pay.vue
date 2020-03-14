<template>
	<view class="">
		<!--状态栏区域-->
		<view class="cu-card padding-lr margin-top" >
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom " @click="selectStore()">
		            <view class="action">
		                <text class="cuIcon-title text-yellow "></text>                
		                <text class="text-black text-sm">下单门店</text>      
		            </view>
		            <view class="action">			
						<text class="text-bold ">{{ShipName}}</text>
						<view class="pg-arrow"></view>
		            </view>
		        </view>
				<view class="cu-form-group">
					<view class="text-sm">配送方式</view>
					<view class=" text-right basis-lg">
						<text class="margin-right-sm text-bold">{{pickUpInStore?"到店自取":"外卖"}}</text>
						
						<switch class="switch-mode radius sm" :checked="pickUpInStore"
						@change="changePick"></switch>		
						<!-- <switch class="switch-mode radius sm" :checked="order.PickUpInStore"
						@change="changePick"></switch> -->
					</view>
				</view>	
				<view class="cu-form-group" @click="toAddress">
					<view class="text-sm">{{pickUpInStore?"预留电话":"联系方式"}}</view>
					<view class=" text-right basis-xl text-bold">						
						<view class=" ">{{ReciveName}} {{RecivePhone}} </view>
					</view>
					<view class="pg-arrow"></view>
				</view>		
				<view class="cu-form-group" :hidden="pickUpInStore" @click="toAddress">
					<view class="text-sm">收货地址</view>
					<view class=" text-right basis-xl text-bold">						
						<view class="">{{ReciveAddress}}</view>

					</view>
					<view class="pg-arrow"></view>
				</view>	
			
				<view class="cu-form-group" v-if="pickUpInStore">
					<view class="text-sm">取单时间</view>
					<picker mode="time" :value="PickTime" :start="PickStartTime" end="21:01" @change="TimeChange">
						<view class="picker">
							{{PickTime}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group" v-else>
					<view class="text-sm ">配送时间</view>
					<view class=" text-right basis-xl text-bold">
						<view class=" ">立即送出 </view>
					</view>
				</view>
				<view class="cu-form-group  text-right text-sm">
					<view class=" text-sm">订单备注</view>
					<input placeholder="请输入口味等" name="OrderNote" class="text-sm " @input="inputOrderNote"></input>
					<view class="pg-arrow"></view>
				</view>
		    </view>
		</view>
		
		
		<view class="cu-card padding-lr margin-top">
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-yellow "></text>                
		                <text class="text-black text-sm">商品明细</text>      
		            </view>
		            <view class="action">
						<!-- <text class="text-gray  text-sm">全部</text>
						<view class="pg-arrow-sm"></view> -->
		            </view>
		        </view>
				<view class="cu-list menu ">
					<view class="cu-item margin-tb-sm" v-for="(item,key) in order " v-bind:key="key">
						<view class="action"> 
							<image :src='item.cover' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								mode="aspectFill"
								></image>
						</view>
						<view class="content">
							<view class="text-black   text">{{item.name}}</view>
							<view class="text-gray   text-sm">{{item.attDes}}</view>
							
							<view class=" flex justify-between">
								<view class="">
									<view class=" text-sm">数量：{{item.Quantity}}</view>									
								</view>
								<view class="action">
									<text class="text-price text-red"></text>
									<text class="text-red">{{item.total}}</text>									
								</view>
							</view>
						</view>
					<!-- 	<view class="action">
							<text class="text-price"></text>4
						</view> -->
					</view>
				</view>
				
				<view class="cu-list menu ">
					<view class="cu-item ">
						<view class="action">包装费</view>
						<view class="action text-red ">
							<text class="text-price"></text>
							<text class="text-red">{{totalPack}}</text>			
						</view>
					</view>
					<view class="cu-item ">
						<view class="action">配送费</view>
						<view class="action text-red ">
							<text class="text-price"></text>
							<text class="text-red">{{totalPost}}</text>	
						</view>
					</view>
				</view>
				<view class="cu-bar  solid-bottom ">
				    <view class="action"></view>
				    <view class="action">						
						<text class="text-gray  text-sm ">已优惠</text>						
						<text class="text-price text-sm text-red "></text>
						<text class="  text-sm text-red margin-right">0</text>
						
						<text class="text-gray  text-sm margin-right-xs">合计</text>						
						<text class=" text-xl text-red text-bold text-price"></text>
						<text class=" text-xl text-red text-bold">{{totalPrice}}</text>
				    </view>
				</view>					
		    </view>
		</view>
		
		
		<!-- 
		<view class=" padding-xs flex  align-center margin-top justify-center">
			<text class="text-center  text-gray">暂无更多订单</text>		
		</view> -->
		<view class="pg-space-xxl"></view>
		<view class="pg-space-xxl"></view>
		
		
		<view class="bg-white cu-list menu padding-tb-sm solid-top" style="position: fixed; bottom:0; left: 0; right: 0;">
			<view class="cu-item" >
				<view class="content">
					<view class="text-grey">
						<view class="text-red text-bold text-xl">
							<text class="text-price text-red"></text>{{totalPrice}}
						</view>
					</view>
					<view class="text-gray text-sm flex align-center">
						<image src='/static/sf.png'
							class="cu-avatar radius lg  bg-gray margin-right-sm" 
							style="width: 23px;height: 23px;"
							></image>
						顺风专送 
					 </view>
				</view>
				<view class="action">
						<button class='cu-btn round bg-yellow text-white shadow margin-right-sm' @click="toSuccess()">微信支付</button>	
				</view>
			</view>
		</view>
			
		

	</view>
</template>

<script>
	var order = {
			"OrderId": 0,//新建订单 默认为零
			"ShipID":1,
			"ShipName":"",
			"PickUpInStore": false,//是否店内获取
			"PaymentMethodSystemName": "Payments.WeixinPay",//支付方式 当前默认微信 硬编码
			"ShippingMethod": "ground", //送货方式 当前默认 硬编码
			"ShipAddress": "", //送货地址
			"RecivePhone":"",//收货人电话
			"ReciveName":"",//
			"ReciveFaxNum":"",//邮编
			
			Prize:1180,
			
			"OrderItems": [
				{
					SKU_SN:"4_16",
					Name:"挂耳包",
					AttrDesc:"5袋装",
					Images:["https://wm.51zfgx.com/images/thumbs/0000020_build-your-own-computer.jpeg"],
					
					"ProductId": 4,//产品Id
					"Quantity":1,//购买数量
					"Attributes": [ //产品属性
						{
							"Id": 16,
							"Value": "40"
						}
					  ],
					"Address": "广西南宁",//分货运输地址
					"OrderItemNotes": "测试订单"//订单项描述
				}
			],
			"AppId": "5099f520489646d28ce9df352237c059",
			"Session": "5IRWgui7bOjkYGlrvi766K9mKd2tRwIgC4WzmK+7X+CZp7kSGSmJSIqltssQ/OrB9p2lDvRpvUin0yjie7GJ7mZb5PXUZTTlx8w737wzdRzwrePHmYWLj4bUvFUrzWCjB6YaLiWte5+/W7YZrm6CzseU4jAvZ3vckhY+T+qfdrCrtig+LpW4XNwmw3sWuotpQehImOyje4aK2zIQ/8UF6PoM/EgItRoOGfplfX0FuESN4z+Fd6vjxAcxHrhuzJ6RLOCiL+0gTCka+kRdZERzxXl262keOsnn1X6CvwZfFKeFckWkF4NYPw1ES5ELF0q2+aiznxXSXzUzatU5xirc1XcySPMCSzLbjd+8DTaWs4l11GTOXxqxIQTecC857+rCBHOjFB3lI8g=", 
			"OrderNote":"测试订单"//订单描述
		}
	export default {
		data(){
			
			var date = new Date();
			var hour = date.getHours();
			hour = hour < 10? "0" + hour : hour;
			var minute = date.getMinutes();
			var currentTime = hour + ':'+minute
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				TabbarBot:this.TabbarBot,
				
				storeList:[], // 店铺列表
				order:{},					
				ShipID:"",
				ShipName:"",
				ShipAddress:'',
				pickUpInStore:true,
				ReciveName:'',
				RecivePhone:'',
				ReciveAddress:'',
				ReciveCityName:'',
				
				PickTime:currentTime, // 选择时间
				PickStartTime:currentTime,				
				
				OrderNote:"",
				
				SF:{},
				Coupon:[],
				
				
				
				totalPrice:4600, // 总价
				totalPack:4, // 包装费
				totalPost:12, // 配送费
			}
		},
		onLoad(){
			this.onInit()
		},
		
		methods:{
			async onInit(){
					console.log(order)
				this.getOrder() // 获取已经选择的订单
				this.getShipList() // 获取门店列表
				this.getCoupon() // 获取优惠券
				this.getSFPreOrder() // 预取顺风费用
				this.getTotal() //	计算总价
			},
			
			// 1 获取已经选择的订单
			getOrder(){
			
				// 获取订单信息
				var orderObj = uni.getStorageSync("order")
				var order = [] 				
				for (var i in orderObj){
					order.push( orderObj[i] )	
					// TODO  计算总价
				}				
				this.setData({
					order:order,
				})			
			},
			// 2 获取门店列表
			async getShipList(){				
				//获取配送门店
				var res = await this.db.storeGetList()
				var storeList = res.data.stores	
				this.setData({
					storeList:storeList,
					ShipID : storeList[0].id,
					ShipName : storeList[0].company_name,
				})
				console.log(this.$data.poi)
			},
			
			// 3 设置用户地址
			setUserAddress(currentAddress){
				console.log(currentAddress)
				this.setData({
					ReciveAddress : currentAddress.address,
					ReciveName : currentAddress.name,
					RecivePhone : currentAddress.phoneNumber,
					ReciveCityName : currentAddress.cityName,
				})
				
			},
			// 4 订单时间选择
			TimeChange(e) {
				console.log(e)
			    this.setData({
					PickTime: e.detail.value
			    })
			  },
			
			// 3 获取优惠券
			async getCoupon(){
				//  TODO  获取优惠券列表
			},
			// 4 预取顺风费用
			async getSFPreOrder(){
				var res = await this.db.sfPreCreateOrder()
				this.setData({
					SF:res.data
				})
				console.log(res.data)
			},
			
			// 5 计算总价
			getTotal(){
				this.setData({					
					totalPrice:4600, // 总价
					totalPack:4, // 包装费
					totalPost:12, // 配送费
				})
			},
			
			
			
			// 选择门店
			async selectStore(){
				var storeList = this.$data.storeList
				var itemList = []
				for (var i=0; i<storeList.length ; i++){
					itemList.push(storeList[i].company_name)
				}
				var that = this
				// var poi = this.$data.poi
				uni.showActionSheet({
					itemList:itemList,
					success(res){
						console.log(res.tapIndex)
						that.setData({
							ShipID : storeList[res.tapIndex].id,
							ShipName : storeList[res.tapIndex].company_name,
						})
						// console.log(that.$data.poi)
					},
				})
			},
			// 是否堂食
			changePick(){
				this.setData({
					pickUpInStore :  !this.$data.pickUpInStore
				})
				console.log(this.$data.pickUpInStore)				
				if(this.$data.ShipAddress == "" && this.$data.pickUpInStore == false)
					this.toAddress()
			},
			
			
			// 去到我的位置
			toAddress(){
				uni.navigateTo({
					url:"/pages/my/address"
				})
				
			},
			
			// 输入备注内容
			inputOrderNote(e){
				console.log(e.detail.value)
				this.setData({OrderNote:e.detail.value})
			},
			
			back(){
				uni.navigateBack({})
			},
			
			/**
			 * @method 下单
			 */
			async toSuccess(){	
				// if (this.check() == false)
				// 	return 
				
				
				var data =
				{
				  "OrderId": 0,//新建订单 默认为零
				  // "PickUpInStore": this.$data.pickUpInStore,//是否店内获取
				  "PickUpInStore": false,//是否店内获取
				  "PaymentMethodSystemName": "Payments.WeixinPay",//支付方式 当前默认微信 硬编码
				  "ShippingMethod": 1, //送货方式 当前默认 硬编码
				  "ShipAddress": this.$data.ShipAddress, //送货地址
				  "RecivePhone": this.$data.RecivePhone,//收货人电话
				  "ReciveName": this.$data.ReciveName,//
				  // "ShipAddress": "广西南宁市友爱北路26号", //送货地址
				  // "RecivePhone": "15277126678",//收货人电话
				  // "ReciveName": "韦丰",//
				  // "ReciveFaxNum":"",//邮编
				  "OrderItems": this.$data.order,
				  // [
				  //   {
				  //     "ProductId": 4,//产品Id
				  //     "Quantity":1,//购买数量
				  //     "Attributes": [ //产品属性
				  //       {
				  //         "Id": 16,
				  //         "Value": "40"
				  //       }
				  //     ],
				  //     "Address": "广西南宁",//分货运输地址
				  //     "OrderItemNotes": "测试订单"//订单项描述
				  //   }
				  // ],
				  // "AppId": "5099f520489646d28ce9df352237c059",
				  // "Session": "5IRWgui7bOjkYGlrvi766K9mKd2tRwIgC4WzmK+7X+CZp7kSGSmJSIqltssQ/OrB9p2lDvRpvUin0yjie7GJ7mZb5PXUZTTlx8w737wzdRzwrePHmYWLj4bUvFUrzWCjB6YaLiWte5+/W7YZrm6CzseU4jAvZ3vckhY+T+qfdrCrtig+LpW4XNwmw3sWuotpQehImOyje4aK2zIQ/8UF6PoM/EgItRoOGfplfX0FuESN4z+Fd6vjxAcxHrhuzJ6RLOCiL+0gTCka+kRdZERzxXl262keOsnn1X6CvwZfFKeFckWkF4NYPw1ES5ELF0q2+aiznxXSXzUzatU5xirc1XcySPMCSzLbjd+8DTaWs4l11GTOXxqxIQTecC857+rCBHOjFB3lI8g=", 
				  "OrderNote":this.$data.OrderNote//订单描述
				}
				
				
				// order placement: ["Cart is empty"]
				
				// var data = {
				// 	  "OrderId": 0,//新建订单 默认为零
				// 	  "PickUpInStore": true,//是否店内获取
				// 	  "PaymentMethodSystemName": "Payments.WeixinPay",//支付方式 当前默认微信 硬编码
				// 	  "ShippingMethod": "ground", //送货方式 当前默认 硬编码
				// 	  "ShipAddress": "广西电影制片厂（1栋2单元2104）", //送货地址
				// 	  "RecivePhone":"15777889458",//收货人电话
				// 	  "ReciveName":"丰fXS",//
				// 	  "ReciveFaxNum":"",//邮编
				// 	  "OrderItems": [
				// 		{
				// 		  "ProductId": 4,//产品Id
				// 		  "Quantity":1,//购买数量
				// 		  "Attributes": [ //产品属性
				// 			{
				// 			  "Id": 16,
				// 			  "Value": "40"
				// 			}
				// 		  ],
				// 		  "Address": "广西南宁",//分货运输地址
				// 		  "OrderItemNotes": "测试订单"//订单项描述
				// 		}
				// 	  ],
				// 	  "AppId": "5099f520489646d28ce9df352237c059",
				// 	  "Session": "5IRWgui7bOjkYGlrvi766K9mKd2tRwIgC4WzmK+7X+CZp7kSGSmJSIqltssQ/OrB9p2lDvRpvUin0yjie7GJ7mZb5PXUZTTlx8w737wzdRzwrePHmYWLj4bUvFUrzWCjB6YaLiWte5+/W7YZrm6CzseU4jAvZ3vckhY+T+qfdrCrtig+LpW4XNwmw3sWuotpQehImOyje4aK2zIQ/8UF6PoM/EgItRoOGfplfX0FuESN4z+Fd6vjxAcxHrhuzJ6RLOCiL+0gTCka+kRdZERzxXl262keOsnn1X6CvwZfFKeFckWkF4NYPw1ES5ELF0q2+aiznxXSXzUzatU5xirc1XcySPMCSzLbjd+8DTaWs4l11GTOXxqxIQTecC857+rCBHOjFB3lI8g=", 
				// 	  "OrderNote":"测试订单"//订单描述
				// 	}
				
				
				var jsondata = JSON.stringify(data)
				
				console.log(jsondata)
				var gen = await this.db.orderGen({
					jsondata:jsondata
				})
				
				
				// uni.showModal({
				// 	title:"支付成功",
				// 	content:"请耐心等待",
				// 	success(){
				// 		uni.switchTab({
				// 			url:"/pages/order/current"
				// 		})
				// 	},
					
				// })
			},
			
			check(){
				var msg = "" , status = true
				if(this.$data.pickUpInStore == false){
					if( this.$data.ShipAddress == "")
						msg = "地址未填写";status = false	
					if( this.$data.RecivePhone == "")
						msg = "电话未填写";status = false	
					if( this.$data.ReciveName == "")
						msg = "收货人未填写";status = false						
				} else{					
					if( this.$data.RecivePhone == "")
						msg = "电话未填写";status = false	
				}			
				if(status==false)
					uni.showModal({
						title:msg
					})
				return status
			},
		}
	}
</script>

<style>


</style>
