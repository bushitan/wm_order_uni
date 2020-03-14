<template>
	<view >
		<view class="">
			<image src="../../static/images/strong/share.jpg" mode="widthFix" style="width: 100%; display: block;"></image>
		</view>
		<view class="cu-card padding-lr padding-bottom">
		    <view class=" pg-radius-bottom  shadow shadow-warp">				   
			   <view class=" flex text-center text-grey  padding-tb" >
				   <view class="flex flex-sub flex-direction " @click="toMenu(false)">
					   <view class="text-xxl page-font-yellow flex justify-center">
						  <image class="pg-icon " src="/static/images/icon/self.png" ></image>
					   </view>
					   <view class="margin-top-sm page-flex-center text-sm">
						   自提
					   </view>
				   </view>
				   <view class="flex flex-sub flex-direction ">
					   <view class="text-xxl page-font-blue flex justify-center" @click="toMenu(true)">						   
							<image class="pg-icon " src="/static/images/icon/wm.png" ></image>
					   </view>
					   <view class="margin-top-sm page-flex-center  text-sm">            
						   外送
					   </view>
				   </view>
				   <!-- <view class="flex flex-sub flex-direction ">
					   <view class="text-xxl page-font-blue flex justify-center">						   
							<image class="pg-icon " src="/static/images/icon/shop.png" ></image>
					   </view>
					   <view class="margin-top-sm page-flex-center  text-sm">            
						   周边
					   </view>
				   </view> -->
				</view> 		
				<view class="padding-lr padding-bottom">
					<view class="cu-bar  solid-bottom " style="background-color: #f1f1f1;">
					    <view class="action margin-right-sm">
							
							<text class="cuIcon-title text-red text-sm"></text> 
							<view class="">
							<view class="text-grey  text-bold text ">超级霸王餐配送中</view>
							<view class="text-grey   text-sm">（预计12：38分到达）</view>
							</view>
					    </view>
					    <view class="action ">
					      <button class="cu-btn line-red round  text-sm " @click="toDetail()" data-target="menuModal">查看详情</button>
					    </view>
					</view>
				</view>
		    </view>
		</view>
		
		<view class="cu-card padding">
		    <view class=" pg-radius  shadow shadow-warp">
				<image  src="../../static/images/strong/banner.jpg" mode="widthFix" class="pg-image-block"></image>
		    </view>
		</view>
		
		<view class="cu-card padding">
		    <view class=" pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom " @click="toOrder()" >
					<view class="action">
						<text class="cuIcon-title text-red text-sm"></text> 
						<text class="text-sm">订单中心</text> 	
					</view>
					<view class="action ">
						<text class="text-grey  text-sm">所有订单</text>
						<view class="pg-arrow"></view>
				   </view>
				</view>
		    </view>
		</view>
		
		<view class="cu-card padding">
		    <view class=" pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-red "></text>                
		                <text class="text-black text-sm">我的优惠券</text>         
		                <!-- <text class="text-red text-sm">（{{store.startTime}}至{{store.endTime}}）</text> -->
		               
		            </view>
		            <view class="action">
						<text class="text-grey  text-sm">全部</text>
						<view class="pg-arrow"></view>
		            </view>
		        </view>
				<view class="cu-list menu ">
					<view class="cu-item ">
						<view class="action">
							<text class="text-black  text-df">5元外送券</text>
						</view>
						<view class="action">
							<text class="text-grey   text-sm">剩余10天</text>
						</view>
					</view>
					<view class="cu-item ">
						<view class="action">
							<text class="text-black  text-df">3元全场减免券</text>
						</view>
						<view class="action">
							<text class="text-grey  text-sm">剩余2天</text>
						</view>
					</view>
				</view>
		    </view>
		</view>
		
		<view class=" padding-xs flex align-center margin-top">
		    <view class="flex-sub text-center">
		        <view class=" text-df ">
		            <text class="text-grey text-sm">Copyright © 2019 索骏科技提供技术支持</text>
		        </view>           
		    </view>
		</view>
		<view class=" flex justify-center ">
		    <button class=" cu-btn round bg-darkGray text-grey text-sm"  type="" open-type="contact">联系客服</button>
		</view>
		<view class="pg-space-xxl"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				isHost: true,
				isSeller: true,
				daystats: { totalScore: 0, totalPrize:0}, // 今日数据
		
				store:{},
				userInfo: {
					id: '202232',
					name: 'fengef',
					allScoreNum: 1,
					allPrizeNum: 1,
					allStoreNum: 1,
				},

			}
		},
		onLoad() {

		},
		methods: {
			toMenu(){
				uni.navigateTo({
					url:"/pages/order/menu"
				})
				
			},
			
			toOrder(){
				uni.navigateTo({
					url:"/pages/order/list"
				})
			},
			toDetail(){
				uni.navigateTo({
					url:"/pages/order/detail"
				})
			},
		}
	}
</script>

<style>
	
	page{
	    background-color: var(--white)
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
