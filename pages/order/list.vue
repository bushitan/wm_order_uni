<template>
	<view class="">
		<!--状态栏区域-->
	<!-- 	<view class="fixed">
			<cu-custom :isBack="true" bgColor="bg-red text-white">
				<block slot="backText" @click="back()">返回</block>
				<block slot="content">我的订单</block>
			</cu-custom>
		</view> -->
		<scroll-view scroll-x class="bg-white nav">
		    <view class='flex text-center'>
		        <view :class="['cu-item flex-sub ' , item.id==TabCur?'text-red cur':'' ]" v-for="(item,index) in SortMenu" @click="tabSelect(item.id)">
		            {{item.name}}
		        </view>
		    </view>
		</scroll-view>
		
		<view class="cu-card padding-lr margin-top" @click="toDetail">
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-red "></text>                
		                <text class="text-black text-sm">Strong（康普店）</text>      
		            </view>
		            <view class="action">
						<!-- <text class="text-gray  text-sm">全部</text> -->
						<view class="pg-arrow-sm"></view>
		            </view>
		        </view>
				<view class="cu-list menu ">
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
						<text class="text-gray  text-sm margin-right">共3件商品</text>		
						
						<text class="text-gray  text-sm margin-right-xs">合计</text>						
						<text class=" text-xl text-black text-bold text-price"></text>
						<text class=" text-xl text-black text-bold">0</text>
				    </view>
				</view>					
		    </view>
		</view>
		
		<view class=" padding-xs flex  align-center margin-top justify-center">
			<text class="text-center  text-gray">暂无更多订单</text>		
		</view>
		<view class="pg-space-xxl"></view>

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
		onLoad(){},
		
		methods:{
			/**
			 * @method 点击选项卡
			 */
			tabSelect(id) {
				// console.log(e)
				// console.log(e.currentTarget.dataset.id);
				this.setData({
					TabCur:id,
					scrollLeft: (id-1)*60
				})
			},
			back(){
				uni.navigateBack({
					
				})
			},
			toDetail(){
				uni.navigateTo({
					url:'/pages/order/detail'
				})
			}
		}
	}
</script>

<style>
	
</style>
