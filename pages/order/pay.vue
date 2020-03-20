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
						<text class="text-bold ">{{ShopName}}</text>
						<view class="pg-arrow"></view>
		            </view>
		        </view>
				<view class=" cu-form-group"  @click="selectShopTake()">
					<view class="text-sm">配送方式</view>
					
					<view class="text-right basis-xl">			
						<text class="text-bold ">{{ShopTakeName}}</text>
					</view>
					<view class="pg-arrow"></view>
					<!-- <view class=" text-right basis-lg">
						<text class="margin-right-sm text-bold">{{pickUpInStore?"到店自取":"外卖"}}</text>						
						<switch class="switch-mode radius sm" :checked="pickUpInStore"
						@change="changePick"></switch>		
						
						<button :class="cu-btn round line-yellow sm">外卖</button>
					</view> -->
				</view>	
				
					
				<view class="cu-form-group" @click="toAddress" v-if="ShopTakeValue == SHOP_TAKE_WM" >
					<view class="text-sm">{{pickUpInStore?"预留电话":"联系方式"}}</view>
					<view class=" text-right basis-xl text-bold">						
						<view class=" ">{{currentAddress.name}} {{currentAddress.phoneNumber}} </view>
					</view>
					<view class="pg-arrow"></view>
				</view>		
				<view class="cu-form-group"  @click="toAddress" v-if="ShopTakeValue == SHOP_TAKE_WM" >
					<view class="text-sm">收货地址</view>
					<view class=" text-right basis-xl text-bold">						
						<view class="">{{currentAddress.address}}</view>
				
					</view>
					<view class="pg-arrow"></view>
				</view>	
				<!-- <view class="cu-form-group" v-else>
					<view class="text-sm ">配送时间</view>
					<view class=" text-right basis-xl text-bold">
						<view class=" ">立即送出 </view>
					</view>
				</view> -->			
				<view class="cu-form-group"  v-if="ShopTakeValue == SHOP_TAKE_ZQ" >
					<view class="text-sm">取单时间</view>
					<picker mode="time" :value="PickTime" :start="PickStartTime" end="21:01" @change="TimeChange">
						<view class="picker">
							{{PickTime}}
						</view>
					</picker>
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
		<!-- <button type="primary" @click="pay">付款</button> -->
		
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
	export default {
		data(){
			
			var date = new Date();
			var hour = date.getHours();
			hour = hour < 10? "0" + hour : hour;
			var minute = date.getMinutes();
			minute = minute < 10? "0" + minute : minute;
			var currentTime = hour + ':'+minute
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				TabbarBot:this.TabbarBot,
				
				
				storeList:[], // 店铺列表
				order:{},					
				ShopId:"",
				ShopName:"",
				ShipAddress:'',
				pickUpInStore:true,
				
				//点单方式
				SHOP_TAKE_WM :this.db.SHOP_TAKE_WM, //1
				SHOP_TAKE_ZQ :this.db.SHOP_TAKE_ZQ, //2
				SHOP_TAKE_TS :this.db.SHOP_TAKE_TS, //4
				ShopTakeList:[],
				ShopTakeValue:this.db.SHOP_TAKE_WM,
				ShopTakeName:'外卖',
				
				currentAddress:{}, // 当前地址
				// ReciveName:'',
				// RecivePhone:'',
				// ReciveAddress:'',
				// ReciveCityName:'',
				
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
		onLoad(options){
			this.onInit()
		},
		
		methods:{
			async onInit(){
					// console.log(order)
				this.getOrder() // 获取已经选择的订单
				this.getShopList() // 获取门店列表
				this.getShopTakeType() // 获取门店点单方式
				this.getCoupon() // 获取优惠券
				this.getSFPreOrder() // 预取顺风费用
				this.getTotal() //	计算总价
				this.getDefaultAddress()
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
			async getShopList(){				
				//获取配送门店
				var res = await this.db.storeGetList()
				var storeList = res.data.stores	
				if(storeList.length == 0 ) // 没有门店
					return
				
				// 获取门店列表			
				var ShopId = storeList[0].id
				var ShopName = storeList[0].name
				var ShopId = uni.getStorageSync(this.db.KEY_SHOP_ID) || "" 				
				for(var i =0 ; i<storeList.length ; i++){
					if(ShopId == storeList[i].id){						
						ShopId = storeList[i].id
						ShopName = storeList[i].name 
					}
				}		
				this.setData({
					storeList:storeList,
					ShopId : ShopId,
					ShopName : ShopName,
				})
							
			},
			
			// 获取门店的点单方式
			async getShopTakeType(){
				// 获取配送方式
				var res = await this.db.storeCurrent({
					ShopId:this.$data.ShopId
				})
				var value = 7
				var ShopTakeList = []
				switch(value){
					case 1 : ShopTakeList = [{"name":"外卖",value:1}] ;break;
					case 2 : ShopTakeList = [{"name":"到店自取",value:2}] ;break;
					case 4 : ShopTakeList = [{"name":"堂食",value:4}] ;break;
					case 3 : ShopTakeList = [{"name":"外卖",value:1},{"name":"到店自取",value:2}] ;break;
					case 5 : ShopTakeList = [{"name":"外卖",value:1},{"name":"堂食",value:4}] ;break;
					case 6 : ShopTakeList = [{"name":"到店自取",value:2},{"name":"堂食",value:4}] ;break;
					case 7 : ShopTakeList = [{"name":"外卖",value:1},{"name":"到店自取",value:2},{"name":"堂食",value:4}] ;break;
				}
				
				//如果桌面点单方式扫码已经确定
				var　ShopTakeValue = ShopTakeList[0].value
				var　ShopTakeName = ShopTakeList[0].name
				var ShopTakeTypeValue = uni.getStorageSync(this.db.KEY_SHOP_TAKE_TYPE)
				if(ShopTakeTypeValue != ""){   
					for(var i =0 ; i<ShopTakeList.length ; i++){
						if(ShopTakeTypeValue == ShopTakeList[i].value){
							ShopTakeValue = ShopTakeList[i].value
							ShopTakeName = ShopTakeList[i].name 
						}
					}
				}				
				this.setData({	
					ShopTakeList:ShopTakeList,
					ShopTakeValue:ShopTakeValue,
					ShopTakeName:ShopTakeName,
				})					
			},
						
			// 3  设置默认地址
			async getDefaultAddress(){
				var res = await this.db.customerShipAddrs()
				// debugger
				if(res.data.length > 0){
					this.setData({
						currentAddress: res.data[0]
					})
				}
				
			},
			
			
			
			
			// 3 设置用户地址
			setUserAddress(currentAddress){
				console.log(currentAddress)
				this.setData({
					currentAddress:currentAddress
				})
				// this.setData({
				// 	ReciveAddress : currentAddress.address,
				// 	ReciveName : currentAddress.name,
				// 	RecivePhone : currentAddress.phoneNumber,
				// 	ReciveCityName : currentAddress.cityName,
				// })	
							
				// 			Latitude: "22.4577"
				// 			Longitude: "108.248"
				// 			address: "广西南宁青秀区 盛天国际"
				// 			cityCode: ""
				// 			cityName: "南宁"
				// 			company: "广西索骏科技有限责任公司"
				// 			email: "281256755@qq.com"
				// 			faxNumber: "07713212955"
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
				// var res = await this.db.sfPreCreateOrder()
				// this.setData({
				// 	SF:res.data
				// })
				// console.log(res.data)
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
				for (var i=0; i<5 ; i++){
				// for (var i=0; i<storeList.length ; i++){
					itemList.push(storeList[i].name)
				}
				var that = this
				uni.showActionSheet({
					itemList:itemList,
					success(res){
						that.setData({
							ShopId : storeList[res.tapIndex].id,
							ShopName : storeList[res.tapIndex].name,
						})
						that.getShopTakeType() // 更新点单方式
					},
				})
			},			
			// 选择点单方式
			selectShopTake(){
				var ShopTakeList = this.$data.ShopTakeList
				var itemList = []
				
				for (var i=0; i<ShopTakeList.length ; i++)
					itemList.push(ShopTakeList[i].name)
				var that = this
				uni.showActionSheet({
					itemList:itemList,
					success(res){
						that.setData({
							ShopTakeValue : ShopTakeList[res.tapIndex].value,
							ShopTakeName : ShopTakeList[res.tapIndex].name,
						})
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
				
				console.log(this.$data.currentAddress.id)
				var data =
				{
				  "OrderId": 0,//新建订单 默认为零I"
				  "PickUpInStore": false,// true堂食 || false到店自取 
				  "ShippingMethod": 1, // 1顺丰　|| 2到店自取
				  // "PickUpInStore": this.$data.pickUpInStore,//是否店内获取
				  "AddressId":this.$data.currentAddress.id,
				  "ReceiverPhone":'2263648574',
				  "PaymentMethodSystemName": "Payments.WeixinPay",//支付方式 当前默认微信 硬编码
				  
				  // "ShipAddress": this.$data.ShipAddress, //送货地址
				  "RecivePhone": this.$data.RecivePhone,//收货人电话
				  "ReciveName": this.$data.ReciveName,//
				  "OrderItems": this.$data.order,
				  "OrderNote":this.$data.OrderNote,//订单描述
				  
				  "ShopId":1,
				  // "StoreId":1,
				  "CustomerTakeType":1,
				  // "AppId":"5099f520489646d28ce9df352237c059" ,// 门店点Appid，不是小程序ID
				  
				}
				
				
				
				var jsondata = JSON.stringify(data)
				
				console.log(jsondata)
				var res = await this.db.orderGen({
					jsondata:jsondata
				})
				var data = res.data
				var orderId = data.id
				uni.redirectTo({
					url: '/pages/wx/wxpay?orderId=' + orderId,
				});
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
