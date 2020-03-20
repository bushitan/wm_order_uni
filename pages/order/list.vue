<template>
	<view class="">
		<!--状态栏区域-->
	<!-- 	<view class="fixed">
			<cu-custom :isBack="true" bgColor="bg-yellow text-white">
				<block slot="backText" @click="back()">返回</block>
				<block slot="content">我的订单</block>
			</cu-custom>
		</view> -->
		<scroll-view scroll-x class="bg-white nav">
		    <view class='flex text-center'>
		        <view :class="['cu-item flex-start' , item.id==TabCur?'text-yellow cur':'' ]" v-for="(item,index) in SortMenu" @click="tabSelect(item.id)">
		            {{item.name}}
		        </view>
		    </view>
		</scroll-view>
		
		<view class="cu-card padding-lr margin-top" @click="toDetail(order.id)" v-for="(order,key) in list">
		    <view class=" bg-white pg-radius  shadow shadow-warp">
		        <view class="cu-bar  solid-bottom ">
		            <view class="action">
		                <text class="cuIcon-title text-yellow "></text>                
		                <text :class="[ order.payment_status=='未付款' ? 'text-red':'text-black' ,'text-bold']" >
							订单ID:{{order.id}} ( {{order.payment_status}} )
						</text>      		                 
		            </view>
		            <view class="action">
						<text class="text-yellow text-bold" v-if="order.payment_status=='未付款'">去支付</text>
						<view class="pg-arrow-sm"></view>
		            </view>
		        </view>
				<view class="cu-list menu ">
					<view class="cu-item margin-tb-sm " style="align-items: flex-start;"
					 v-for="(item,j) in order.order_items">
						<view class="action">
							<image :src='item.product.images[0]' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								mode="aspectFill"
								></image>
						</view>
						<view class="content ">
							<view class="text-black   text">{{item.product.name}}</view>
							<!-- <view class="text-gray   text-sm">{{item.attr_desc}}</view> -->
							<view class="text-gray   text-sm">数量：{{item.quantity}}</view>
						</view>
						<!-- <view class="action">
							<view class="text-gray   text-sm">x{{item.quantity}}</view>
						</view> -->
					</view>
				</view>
				<view class="cu-bar  solid-bottom ">
				    <view class="action"></view>
				    <view class="action">						
						<text class="text-gray  text-sm margin-right">共3件商品</text>		
						
						<text class="text-gray  text-sm margin-right-xs">合计</text>						
						<text class=" text-xl text-black text-bold text-price"></text>
						<text class=" text-xl text-black text-bold">{{order.order_total}}</text>
				    </view>
				</view>					
		    </view>
		</view>
		
		<view class=" padding-xs flex  align-center margin-top justify-center">
			<text class="text-center  text-gray">{{ isMore?"加载中..":"暂无更多订单"}}</text>		
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
				SortMenu: [{id:0,name:"全部订单"},{id:1,name:"退款"}],
				
				isRefund:false, // 加载全部订单
				page : 1,
				limit : 10,
				lock : false,
				isMore:true,
				list:[],
			}
		},
		onReachBottom(){
			if(this.$data.isMore)
				this.getOrderList() 
		},
		onLoad(){
			this.onInit()			
		},
		
		methods:{
			
			onInit(){
				this.db.listInit(this)
				this.getOrderList() //获取订单
			},
			
			async getOrderList(){
				var data = {
					Page:this.$data.page,
					Limit:this.$data.limit,
				}
				if(this.$data.isRefund) 
					data.Status = this.db.PAYMENT_STATUS_REFUND
											
				var res = await this.db.orderGetList(data)			
				this.db.listUpdate(this , res)
			},
			
			/**
			 * @method 点击选项卡
			 */
			tabSelect(id) {
				console.log(id)
				var isRefund = false
				if( id == 1 ) isRefund = true
				this.setData({
					TabCur:id,
					scrollLeft: (id-1)*60,
					isRefund:isRefund,
				})
				this.onInit() // 重新请求				
			},
			
			back(){
				uni.navigateBack({
					
				})
			},
			toDetail(id){
				uni.navigateTo({
					url:'/pages/order/detail?orderId=' + id
				})
			}
		}
	}
</script>

<style>
	
</style>
