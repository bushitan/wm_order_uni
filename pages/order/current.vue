<template>
	<view class="">
		<!-- <view class="box" :style="'height:'+ CustomBar +'px;'"></view> -->
		<!-- <view class="padding prepare"  :style="'top:' +CustomBar +'px;'" >
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
		</view> -->
	
		
		<view class="cu-card padding-lr margin-top" @click="toDetail">
			<view class=" bg-white pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-red "></text>                
						<text class="text-black text-sm">当前订单</text>      
					</view>
					<view class="action">
						<view class="pg-arrow-sm"></view>
					</view>
				</view>
				<view class="cu-list menu ">
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<view class="text-gray text-sm">下单门店</view>
						</view>
						<view class="action">
							<view class=" text-sm ">Strong（康普店）</view>
						</view>
					</view>
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<view class="text-gray text-sm">配送方式</view>
						</view>
						<view class="action">
							<view class=" text-sm ">门店自取</view>
						</view>
					</view>				
					<view class="cu-item ">
						<view class="action">
							<view class="text-gray text-sm">订单产品</view>
						</view>
					</view>
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<image src='/static/images/strong/swiper.jpg' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								></image>
						</view>
						<view class="content">
							<view class="text-black   text">挂耳包</view>
							<view class="text-gray   text-sm">(加冰)</view>
						</view>
						<view class="action">
							<view class="text-gray   text-sm">x1</view>
						</view>
					</view>
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<image src='/static/images/strong/swiper.jpg' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								></image>
						</view>
						<view class="content">
							<view class="text-black   text">挂耳包</view>
						</view>
						<view class="action">
							<view class="text-gray   text-sm">x1</view>
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
				SortMenu: [{id:0,name:"全部订单"},{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"已完成"}]
				
			}
		},
		onLoad(){
			console.log(this.CustomBar)
		},
		
		methods:{
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
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		
	}
	.icon_image{ width:84px; }
	
</style>
