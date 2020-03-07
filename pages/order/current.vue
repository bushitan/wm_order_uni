<template>
	<view class="">
		<!-- <view class="box" :style="'height:'+ CustomBar +'px;'"></view> -->
		<!-- <view class="padding prepare"  :style="'top:' +CustomBar +'px;'"> -->
			
		<view class="padding prepare"   v-if="list.length==0">			
			<view class="bg-white pg-radius flex justify-center align-center"  style="height: 100%;">
				<view class="text-center">
					<view class="">
						<image src="../../static/logo.png" class="icon_image" mode="widthFix"></image>					
					</view>
					<view class="padding text-black text-bold text-lg">你好，丰丰</view>
					<view class="text-gray text">今天那你还没有下单</view>
					<view class="text-gray text">快选择一杯喜欢的茶吧</view>
					<view class="margin-top-xl" @click="toMenu()">
						<button class="cu-btn bg-red round margin-top-xl padding-lr" style="width: 150px;">去点单</button>					
					</view>
					<view class=" text-gray text flex justify-center align-center margin-top" @click="toOrderList()">
						历史订单 <view class="pg-arrow-sm"></view>
					</view>					
				</view>				
			</view>
		</view>
	
		<view class="" v-else>
				
			<view class="cu-card padding-lr margin-top" @click="toDetail"  v-for="(order,key) in list">
				<view class=" bg-white pg-radius  shadow shadow-warp">
					<view class="cu-bar  solid-bottom ">
						<view class="action">
							<text class="cuIcon-title text-yellow "></text>                
							<text class="text-black text-sm">下单时间（{{order.paid_dateutc}}）</text>      
						</view>
						<view class="action">
							<view class="text-yellow text-bold">制作中</view>
							<view class="pg-arrow"></view>
						</view>
					</view>
					<view class="cu-list menu ">
						<view class="cu-item margin-tb-sm">
							<view class="action">
								<view class="text-gray text-sm">下单门店</view>
							</view>
							<view class="action">
								<view class=" text-sm ">{{order.pickup_address}}</view>
							</view>
						</view>
						<view class="cu-item margin-tb-sm">
							<view class="action">
								<view class="text-gray text-sm">配送方式</view>
							</view>
							<view class="action">
								<view class=" text-sm ">{{order.pick_up_in_store?"自取":"外卖"}}</view>
							</view>
						</view>				
						<view class="cu-item ">
							<view class="action">
								<view class="text-gray text-sm">订单产品</view>
							</view>
						</view>
						<view class="cu-item margin-tb-sm" v-for="(item,key) in order.order_items">
							<view class="action">
								<image :src='item.product.images[0]' 
									class="cu-avatar radius lg  bg-gray margin-right-sm " 
									style="width:60px;height:60px"
									></image>
							</view>
							<view class="content">
								<view class="text-black   text">{{item.product.name}}</view>
								<view class="text-gray   text-sm">{{item.attr_desc}}</view>
							</view>
							<view class="action">
								<view class="text-gray   text-sm">x{{item.quantity}}</view>
							</view>
						</view>
					</view>
					<view class="cu-bar  solid-bottom ">
						<view class="action"></view>
						<view class="action">						
							<text class="text-black ">共3件商品</text>
						</view>
					</view>					
				</view>
				
			</view>
			<view class=" padding-xs flex  align-center margin-top justify-center">
				<text class="text-center  text-gray text-sm" >正在制作，请耐心等待</text>		
			</view>
			<view class="pg-space-xxl"></view>
		
		</view>
		
	</view>
</template>

<script>

	export default {
		data(){
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				
				TabCur: 0,
				scrollLeft:0,
				// SortMenu: [{id:0,name:"全部订单"},{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"已完成"}],
				
				list:[],
				
			}
		},
		onLoad(){
			this.onInit()			
		},
		
		methods:{
			onInit(){
				this.getOrderList() //获取订单
			},
			
			
			async getOrderList(){
				var data = {
					Page:this.$data.page,
					Limit:this.$data.limit,
					Status:this.db.ORDER_STATUS_PROCESSING,
				}											
				var res = await this.db.orderGetList(data)			
				// this.db.listUpdate(this , res)
				this.setData({
					list:res.data
				})
			},
			
			
			
			
			
			
			toMenu(){
				uni.switchTab({
					url:"/pages/order/menu"
				})
			},
			toOrderList(){
				uni.navigateTo({
					url:"/pages/order/list"
				})
			},
			
		}
	}
</script>

<style>
	page{
	    /* background-color: #fafafa; */
	}
	.page{
		
	}
	.prepare{
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		
	}
	.icon_image{ width:84px; }
	
</style>
