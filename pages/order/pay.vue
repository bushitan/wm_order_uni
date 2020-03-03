<template>
	<view class="">
		<!--状态栏区域-->
		<view class="cu-card padding-lr margin-top" >
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom " @click="selectStore()">
		            <view class="action">
		                <text class="cuIcon-title text-red "></text>                
		                <text class="text-black text-sm">下单门店</text>      
		            </view>
		            <view class="action">			
						<text class="text-black text-sm">{{order.StoreName}}</text>
						<view class="pg-arrow"></view>
		            </view>
		        </view>
				<view class="cu-form-group">
					<view class="text-sm">配送方式</view>
					<view class=" text-right basis-lg">						
						堂食<switch class="switch-mode radius sm" :checked="order.PickUpInStore"
						@change="changePick"></switch>外卖
					</view>
				</view>	
				<view class="cu-form-group" @click="toAddress">
					<view class="text-sm">取单电话</view>
					<view class=" text-right basis-xl">						
						<view class="text-black text-sm ">{{order.ReciveName}} {{order.RecivePhone}} </view>
					</view>
					<view class="pg-arrow"></view>
				</view>					
				<view class="cu-form-group" :hidden="order.PickUpInStore==false" @click="toAddress">
					<view class="text-sm">收货地址</view>
					<view class=" text-right basis-xl">						
						<view class="text-black text-sm">{{order.ShipAddress}}</view>

					</view>
					<view class="pg-arrow"></view>
				</view>	
		    </view>
		</view>
		
		
		<view class="cu-card padding-lr margin-top">
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-red "></text>                
		                <text class="text-black text-sm">商品明细</text>      
		            </view>
		            <view class="action">
						<!-- <text class="text-gray  text-sm">全部</text>
						<view class="pg-arrow-sm"></view> -->
		            </view>
		        </view>
				<view class="cu-list menu ">
					<view class="cu-item margin-tb-sm" v-for="(item,key) in order.OrderItems ">
						<view class="action">
							<image :src='item.Images[0]' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								></image>
						</view>
						<view class="content">
							<view class="text-black   text">{{item.Name}}</view>
							<view class="text-gray   text-sm">{{item.AttrDesc}}</view>
							<view class="text-gray   text-sm">x{{item.Quantity}}</view>
						</view>
						<view class="action">
							<text class="text-price"></text>4
						</view>
					</view>
				</view>
				
				<view class="cu-list menu ">
					<view class="cu-item ">
						<view class="action">包装费</view>
						<view class="action">
							<text class="text-price"></text>4
						</view>
					</view>
					<view class="cu-item ">
						<view class="action">配送费</view>
						<view class="action">
							<text class="text-price"></text>0
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
						<text class=" text-xl text-black text-bold text-price"></text>
						<text class=" text-xl text-black text-bold">{{order.Prize}}</text>
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
						<view class="text-black text-bold text-xl">
							<text class="text-price"></text>{{order.Prize}}
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
			"StoreID":1,
			"StoreName":"",
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
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				TabbarBot:this.TabbarBot,
				
				order:{},
			}
		},
		onLoad(){
			this.onInit()
		},
		
		methods:{
			
			onInit(){
				
				// var order = order
				this.setData({
					order:order
				})
			},
			
			// 选择门店
			async selectStore(){
				var res = await this.db.storeGetList()
				console.log(res)
				var storeList = res.data.stores
				var itemList = []
				for (var i=0; i<storeList.length ; i++){
					itemList.push(storeList[i].company_name)
				}
				var that = this
				var order = this.$data.order
				uni.showActionSheet({
					itemList:itemList,
					success(res){
						console.log(res.tapIndex)
						order.StoreID = storeList[res.tapIndex].id
						order.StoreName = storeList[res.tapIndex].company_name
						that.setData({
							order:order
						})
						console.log(that.$data.order)
					},
				})
			},
			// 是否堂食
			changePick(){
				var order = this.$data.order
				order.PickUpInStore = !order.PickUpInStore
				this.setData({
					order : order
				})
				console.log(this.$data.order.PickUpInStore)
				
				if(order.ShipAddress == "")
					this.toAddress()
			},
			
			
			// 去到我的位置
			toAddress(){
				uni.navigateTo({
					url:"/pages/my/address"
				})
			},
			
			back(){
				uni.navigateBack({
					
				})
			},
			
			toSuccess(){
				uni.showModal({
					title:"支付成功",
					content:"请耐心等待",
					success(){
						uni.switchTab({
							url:"/pages/order/current"
						})
					},
					
				})
			},
		}
	}
</script>

<style>


</style>
