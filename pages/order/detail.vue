<template>
	<view class="">	
		<!--状态栏区域-->			
		<view class="text-xl text-bold flex justify-between align-center padding">
            <view>
                <text>订单ID：{{order.id}}</text>
            </view>				
            <button class="cu-btn round line-yellow" @click="clickCancle">取消订单</button>
		</view>
		
<!-- 		<view class="cu-card padding-lr ">
			<view class=" bg-white pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-yellow "></text>                
						<text class="text-black text-sm">配送地图</text>      
					</view>
					<view class="action">
						<text class="text-gray  text-sm">预计还有30分钟到达</text>
					</view>
				</view>				
				<view>
					<map
						style="width: 100%; height:400rpx">
						
					</map>
				</view>
			</view>
		</view> -->
		
		<view class="cu-card padding-lr ">
			<view class=" bg-white pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-yellow "></text>                
						<text class="text-black text-sm">{{order.pickup_address}}</text>      
					</view>
					<view class="action">
						<text class="text-gray  text-sm">{{order.pick_up_in_store?"堂食":"外卖"}}</text>
						<!-- <view class="pg-arrow-sm"></view> -->
					</view>
				</view>
				<view class="cu-list menu ">
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
							<view class="text-gray   text-sm">数量：{{item.quantity}}</view>
							<view class="text-gray   text-sm">
								单价：<text class="text-price"></text>{{item.product.price}}
							</view>
							<view class="text-gray  text-sm">
								包装费：<text class="text-price"></text>{{order.wm_cost}} 
							</view>
						</view>
						<view class="action">
							<text class="text-price"></text>{{item.product.price}}
						</view>
					</view>
				
				<!-- 	<view class="cu-item margin-tb-sm">
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
					</view> -->
				</view>
				
				<view class="cu-list menu ">
					<!-- <view class="cu-item ">
						<view class="action">包装费</view>
						<view class="action">
							<text class="text-price"></text>4
						</view>
					</view> -->
					<view class="cu-item ">
						<view class="action">配送费</view>
						<view class="action">
							<text class="text-price"></text>{{order.customer_take_ship_fee}}
						</view>
					</view>
				</view>
				<view class="cu-bar  solid-bottom ">
					<view class="action"></view>
					<view class="action">						
						<text class="text-gray  text-sm ">已优惠</text>						
						<text class="text-price text-sm text-yellow "></text>
						<text class="  text-sm text-yellow margin-right">{{order.order_discount}}</text>
						
						<text class="text-gray  text-sm margin-right-xs">合计</text>						
						<text class=" text-xl text-black text-bold text-price"></text>
						<text class=" text-xl text-black text-bold">{{order.order_total}}</text>
					</view>
				</view>					
			</view>
		</view>
		
		
		<view class="cu-card padding-lr margin-top">
			<view class=" bg-white pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-yellow "></text>                
						<text class="text-black text-sm">配送信息</text>      
					</view>
					<view class="action">
						<!-- <text class="text-gray  text-sm">全部</text>
						<view class="pg-arrow-sm"></view> -->
					</view>
				</view>
				
				<view class="cu-list menu " v-if="order.pick_up_in_store">
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">堂食</text>
						</view>
						<view class="action">
							<view class="text-black text-sm">自取</view>
						</view>
					</view>
				</view>
				<view class="cu-list menu " v-else>
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">配送服务</text>
						</view>
						<view class="action">
							<view class="text-black text-sm">顺风专送</view>
						</view>
					</view>
					<!-- <view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">配送骑手</text>
						</view>
						<view class="action">
							<view class="text-black text-sm">风风风</view>
						</view>
					</view> -->
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">配送地址</text>
						</view>
						<view class="action text-right basis-lg">
							<view class="text-black text-sm">{{order.ship_address.addr_detail}}</view>
						</view>
					</view>
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">联系人</text>
						</view>
						<view class="action text-right basis-lg">
							<view class="text-black text-sm ">
								{{order.ship_address.name }}
								{{order.ship_address.PhoneNumber}}
							</view>
						</view>
					</view>
					<view class="cu-item solid-top">
						<view class="content text-center text-bold text-black text-lg" >
							<text class="cuIcon-phone "></text>
							<text class="">致电骑手</text>
						</view>
					</view>
				</view>				
			</view>
		</view>
		
		
		<view class="cu-card padding-lr margin-top">
			<view class=" bg-white pg-radius  shadow shadow-warp">
				<view class="cu-bar  solid-bottom ">
					<view class="action">
						<text class="cuIcon-title text-yellow "></text>                
						<text class="text-black text-sm">订单信息</text>      
					</view>
				</view>
				<view class="cu-list menu ">
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">订单号码</text>
						</view>
						<view class="action">
							<view class="text-black text-sm">{{order.id}}</view>
						</view>
					</view>
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">下单时间</text>
						</view>
						<view class="action">
							<view class="text-black text-sm">{{order.created_on_utc}}</view>
						</view>
					</view>
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">支付方式</text>
						</view>
						<view class="action ">
							<view class="text-black text-sm">{{order.payment_method_systemName}}</view>
						</view>
					</view>
					<view class="cu-item ">
						<view class="content">
							<text class="text-gray text-sm">备注信息</text>
						</view>
						<view class="action ">
							<view class="text-black text-sm">{{order.OrderNote}}</view>
						</view>
					</view>
				</view>				
			</view>
		</view>
		
		
		<view class=" padding-xs flex  align-center margin-top justify-center">
			<text class="text-center  text-gray text-sm">{{order?"信息加载完毕":"信息加载中"}}</text>		
		</view>
		<view class="pg-space-xxl"></view>		
		
			<!-- <view class="box" :style="'top:' +CustomBar +'px;'">
				<view class="canui-order-details-head">
			
					<view class="cu-list menu">
						<view class="cu-item">
							<view class='content'>
								<view class="text-df">包裹正在运送路上</view>
								<view class='text-sm'>2019-03-21 18:00:00</view>
							</view>
							<view class='action canui-status-3'></view>
						</view>
					</view>
			
				</view>
			
				<view class="padding canui-card-fiex-radius-box">
					<view class="cu-list menu bg-white">
						<view class="cu-item">
							<view class='content'>
								<view class="canui-xzwz text-df">包裹正在运送路上</view>
								<view class='text-gray text-sm'>2019-03-21 18:00:00</view>
							</view>
							<view class='action'><view class='text-grey icon-right'></view></view>
						</view>
					</view>
				</view>
			
				<view class="bg-white canui-goods-box">
			
					<view class="canui-card-order">
						<view class="canui-order-item bg-white">
							<view class="head-title-box">
								<navigator open-type="navigate" hover-class='none' url="/pages/shop/index/index">
									<text class="icon-shop"></text>
									<text>某某某旗舰店铺</text>
									<text class="icon-right"></text>
								</navigator>
							</view>
							<view class="cu-list menu menu-avatar">
								<navigator open-type="navigate" class="cu-item" hover-class='none' url="/pages/shop/goods/details">
									<view class="cu-avatar radius lg" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></view>
									<view class='content canui-xzwz tow'>商品名称商品名称商品名称商品名称商品名称商品名称</view>
									<view class='action'>
										<view class='text-price'>20.00</view>
										<view class="text-xs text-right text-gray">x1</view>
									</view>
								</navigator>
								<navigator open-type="navigate" class="cu-item" hover-class='none' url="/pages/shop/goods/details">
									<view class="cu-avatar radius lg" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></view>
									<view class='content canui-xzwz tow'>商品名称商品名称商品名称商品名称商品名称商品名称</view>
									<view class='action'>
										<view class='text-price'>20.00</view>
										<view class="text-xs text-right text-gray">x1</view>
									</view>
								</navigator>
							</view>
						</view>
					</view>
			
					<view class="text-gray text-sm solid-bottom order-price-log">
						<view class="log-list">
							<text>商品总价</text> <text class="text-price canui-text-right">252.00</text>
						</view>
						<view class="log-list">
							<text>运费(快递)</text> <text class="text-price canui-text-right">0.00</text>
						</view>
						<view class="log-list">
							<text>会员卡</text> <text class="text-price canui-text-right">0.00</text>
						</view>
						<view class="log-list">
							<text>优惠券</text> <text class="text-price canui-text-right">0.00</text>
						</view>
						<view class="log-list">
							<text>手续费</text> <text class="text-price canui-text-right">5.00</text>
						</view>
						<view class="log-list bg-white text-df">
							<text>订单总价</text><text class="text-sm text-gray">（手续费除外）</text>
							<text class="text-price canui-text-right">252.00</text>
						</view>
					</view>
					<view class="order-price-log-zj">
						<text>实际消费积分</text> <text class="text-price canui-text-right text-yellow">252.00</text>
					</view>
					<view class="order-price-log-zj">
						<text>实付手续费</text> <text class="text-price canui-text-right text-yellow">5.00</text>
					</view>
				</view>
			
				<view class="margin-top order-address-box">
					<view class="cu-list menu bg-white">
						<view class="cu-item">
							<view class='content'>
								<view class="text-df">收货人 <text>13800138000</text></view>
								<view class='text-gray text-sm canui-xzwz'>地址：重庆市某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某</view>
							</view>
						</view>
					</view>
				</view>
			
				<view class="margin-top bg-white order-details-log">
			
					<view class="order-menu-list solid-bottom">
						<view class="log-list bg-white text-df">
							<text>订单编号：</text> <text class="text-gray">1234567897894</text>
						</view>
						<view class="log-list bg-white text-df">
							<text>下单时间：</text> <text class="text-gray">2019-03-05 09:25:00</text>
						</view>
						<view class="log-list bg-white text-df">
							<text>付款时间：</text> <text class="text-gray">2019-03-05 09:25:00</text>
						</view>
					</view>
					<view class="order-menu-list solid-bottom">
						<view class="log-list bg-white text-df">
							<text>快递单号：</text> <text class="text-gray">123456789789</text>
						</view>
						<view class="log-list bg-white text-df">
							<text>快递名称：</text> <text class="text-gray">顺丰快递</text>
						</view>
						<view class="log-list bg-white text-df">
							<text>发货时间：</text> <text class="text-gray">2019-03-05 09:25:00</text>
						</view>
					</view>
				</view>
			
				<view class="grid col-2 flex bg-white order-contact-box">
					<view class="contact-table">
						<text class="icon-service text-blue"></text> 联系客服
					</view>
					<view class="contact-table">
						<text class="icon-phone text-blue"></text> 电话联系
					</view>
				</view>
			
			</view> 
			
			
			
			<view class="bg-white " style="position: fixed; bottom:0;left: 0; right: 0;">
				<view class="grid col-4 flex justify-end order-btn-box">
					<view class='margin-tb-sm text-center'>
						<button class='cu-btn round line-gray shadow'>删除订单</button>
					</view>
					<view class='margin-tb-sm text-center'>
						<button class='cu-btn round line-gray shadow'>查看物流</button>
					</view>
					<view class='margin-tb-sm text-center'>
						<button class='cu-btn round line-red shadow'>确认收货</button>
					</view>
				</view>
			</view>-->
	</view>
</template>

<script>
	export default {
		data(){
			return {				
				StatusBar:this.StatusBar,
				CustomBar : this.CustomBar,
				TabbarBot:this.TabbarBot,
				
				orderID:"",
				order:{
					ship_address:{},
				}, // 订单信息
			}
		},
		onLoad(options){
			console.log(this.CustomBar)
			this.setData({
				orderID:options.orderID || ""
			})
			this.onInit()
		},
		
		methods:{
			async onInit(){
				// var order = await this.db.orderGen()
				var res = await this.db.orderGetDetail({
					OrderId:this.$data.orderID
				})
				this.setData({
					order:res.data
				})
			},
			
			back(){
				uni.navigateBack({
					
				})
			},
			// 取消订单
			clickCancle(){
				console.log("取消订单")
			},
		}
	}
</script>

<style>
	page {
	    /* padding-top: 50px;
	    padding-bottom:170rpx; */
	}
	.cu-custom{
	    position: absolute;
	    top: 0px;
	    width: 100%;
	}
	.cu-custom .cu-bar{
	    padding-right:inherit;
	    background-image:linear-gradient(90deg, #FA9C05, #F36302);
	}
	.box{
	    position: absolute;
	    top: 64px;
	    width: 100%;
	    padding-bottom: 170rpx;
	}
	.canui-order-details-head{
	    background-image:linear-gradient(90deg, #FA9C05, #F36302);
	    color:#F1f1f6;
	    height:230rpx;
	    padding-top:20rpx;
	}
	.canui-order-details-head .cu-list.menu>.cu-item{
	    background:initial;
	}
	.canui-order-details-head .cu-list .cu-item .action{
	    background-repeat: no-repeat;
	    background-size: 100%;
	    width:142rpx;
	    height:92rpx;
	}
	/*待付款*/
	.canui-order-details-head .cu-list .cu-item .canui-status-1{
	    background-image: url("https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206281-assets/web-upload/97a88c75-0177-4409-9756-d3d93527391f.png");
	}
	/*待发货*/
	.canui-order-details-head .cu-list .cu-item .canui-status-2{
	    background-image: url("https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206281-assets/web-upload/12edf711-8c22-44e0-898b-2b7e6a6fc23d.png");
	}
	/*待收货*/
	.canui-order-details-head .cu-list .cu-item .canui-status-3{
	    background-image: url("https://cdn.nlark.com/yuque/0/2019/png/285274/1553229207224-assets/web-upload/82196039-e8e9-4a6b-b889-e8ca614cd030.png");
	}
	/*已完成*/
	.canui-order-details-head .cu-list .cu-item .canui-status-4{
	    background-image: url("https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206282-assets/web-upload/1b6678c7-8cf3-4a4b-9cd5-50109e2f724f.png");
	    width:112rpx;
	}
	/*已取消*/
	.canui-order-details-head .cu-list .cu-item .canui-status-5{
	    background-image: url("https://cdn.nlark.com/yuque/0/2019/png/285274/1553229207158-assets/web-upload/f6ae0024-dde8-45cc-aaec-70b8a841701f.png");
	    width:112rpx;
	}
	.canui-card-fiex-radius-box{
	    position:absolute;
	    top:125rpx;
	    width:100%;
	    z-index:9;
	}
	.canui-card-fiex-radius-box .cu-list{
	    border-radius:18rpx;
	    box-shadow:0 3rpx 6rpx rgba(0, 0, 0, 0.1);
	}
	.canui-card-fiex-radius-box .cu-list.menu>.cu-item{
	    padding:30rpx;
	}
	.canui-goods-box{
	    padding-top:100rpx;
	    position: relative;
	    z-index:0;
	}
	.canui-card-order{
	    padding:0 20rpx;
	}
	.canui-card-order .canui-order-item{
	    position: relative;
	    margin-bottom:30rpx;
	    padding:20rpx;
	}
	.head-title-box .icon-shop{
	    margin-right:10rpx;
	}
	.head-title-box .icon-right{
	    margin-left:5rpx;
	}
	.canui-order-item .cu-list.menu-avatar>.cu-item{
	    padding:0;
	    padding-left:110rpx;
	}
	.canui-order-item .cu-list.menu-avatar>.cu-item>.cu-avatar{
	    left:0rpx;
	}
	.canui-order-item .cu-list .cu-item .canui-xzwz{
	    -webkit-line-clamp:2;
	}
	.canui-order-item .cu-list.menu>.cu-item .content{
	    font-size:27rpx;
	    margin-right:40rpx;
	}
	.canui-order-item .cu-list.menu-avatar>.cu-item .action {
	    text-align:right;
	    margin-top:-10rpx;
	}
	.canui-order-item .cu-list.menu>.cu-item .action .text-price{
	    font-size:28rpx;
	}
	.canui-order-item .order-price-box{
	    text-align:right;
	    font-size:26rpx;
	}
	.order-price-log{
	    padding:0 30rpx;
	    padding-bottom:10rpx;
	    margin-top:-30rpx;
	}
	.order-price-log .log-list{
	    padding:5rpx 0;
	}
	.order-price-log-zj{
	    padding:20rpx 30rpx;
	    background:#fafafa;
	}
	.order-address-box .cu-list.menu>.cu-item{
	    padding:30rpx;
	}
	.order-address-box .cu-list .cu-item .content view text{
	    margin-left: 20rpx;
	}
	
	.order-details-log{
	    padding:0 30rpx;
	}
	.order-details-log .order-menu-list{
	    padding:10rpx 0;
	}
	.order-details-log .order-menu-list .log-list{
	    padding:10rpx 0;
	}
	.order-details-log .order-menu-list .log-list text + text{
	    margin-left:20rpx;
	}
	
	.order-contact-box{
	    padding:0 30rpx;
	}
	.order-contact-box .contact-table{
	    text-align:center;
	    padding:20rpx 0;
	}
	.order-contact-box .contact-table text{
	    font-size:34rpx;
	}
	.order-contact-box .contact-table + .contact-table{
	    border-left: 1px solid #f1f1f1;
	}
	
	.box .order-price-log-zj + .order-price-log-zj{
	    padding-top: 0;
	}
	.order-btn-box{
	    height:100rpx;
	}
	.order-btn-box .margin-tb-sm{
	    margin-bottom:0;
	}
	.order-btn-box .margin-tb-sm .cu-btn{
	    font-size:24rpx;
	}
	.order-btn-box .margin-tb-sm .cu-btn[class*="line"]::after {
	    /*按钮边框大小*/
	    border: 3rpx solid currentColor;
	}
	.order-btn-box .margin-tb-sm .line-gray{
	    color: #666;
	}
	.order-btn-box .margin-tb-sm + .margin-tb-sm{
	    margin-left: 10rpx;
	}

</style>
