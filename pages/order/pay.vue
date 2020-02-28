<template>
	<view class="">
		<!--状态栏区域-->
		<view class="cu-card padding-lr margin-top" >
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-red "></text>                
		                <text class="text-black text-sm">下单门店</text>      
		            </view>
		            <view class="action">			
						<text class="text-black text-sm">Strong（康普店）</text>
						<view class="pg-arrow"></view>
		            </view>
		        </view>
				<view class="cu-form-group">
					<view class="text-sm">配送方式</view>
					<view class=" text-right basis-lg">						
						<switch class="switch-mode radius sm" checked></switch>
					</view>
				</view>	
				<view class="cu-form-group">
					<view class="text-sm">取单电话</view>
					<view class=" text-right basis-xl">						
						<view class="text-black text-sm ">韦XX 15777889458</view>
					</view>
					<view class="pg-arrow"></view>
				</view>	
				<!-- <view class="cu-form-group" >
					<view class="text-sm">收货地址</view>
					<view class=" text-right basis-lg">						
						<view class="text-black text-sm">广西电影制片厂（1栋2单元2104）</view>
						<view class="text-black text-sm ">韦XX 15777889458</view>
					</view>
					<view class="pg-arrow"></view>
				</view>	 -->
				
				<view class="cu-form-group">
					<view class="text-sm">收货地址</view>
					<view class=" text-right basis-xl">						
						<view class="text-black text-sm">广西电影制片厂（1栋2单元2104）</view>
						<view class="text-black text-sm ">韦XX 15777889458</view>
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
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<image src='/static/images/strong/swiper.jpg' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								></image>
						</view>
						<view class="content">
							<view class="text-black   text">挂耳包</view>
							<view class="text-gray   text-sm">(5袋)</view>
							<view class="text-gray   text-sm">x1</view>
						</view>
						<view class="action">
							<text class="text-price"></text>4
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
							<view class="text-gray   text-sm"> </view>
							<view class="text-gray   text-sm">x1</view>
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
						<text class=" text-xl text-black text-bold">0</text>
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
							<text class="text-price"></text>666
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
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				TabbarBot:this.TabbarBot,
			}
		},
		onLoad(){},
		
		methods:{
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
