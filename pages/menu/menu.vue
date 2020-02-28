<template>
	<view>
		<!-- <view class="fixed">
			<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
				<block slot="backText" @click="back()">返回</block>
				<block slot="content">垂直导航</block>
			</cu-custom>
		</view> -->
		<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in 4" :key="index">
				<image src="/static/images/strong/swiper.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx - 50px)">
				<view class="cu-item" :class="index==tabCur?'text-yellow text-bold  bg-white cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx - 50px)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar  bg-white">
						<view class="action">
							<text class="cuIcon-title text-blue"></text> {{item.name}}</view>
					</view>
					
					<view class="cu-list menu ">
						<view class="cu-item " style=" align-items: flex-start"  v-for="(item,key) in [1,2,3,4,5]">
							<view class="">
								<image :src='userInfo.logo' 
									class="cu-avatar radius lg  bg-gray margin-right-sm " 
									style="width:60px;height:60px"
									></image>
							</view>							
							<view class="action basis-xl padding-bottom" >
								<view class="">
									<text class=" text-black text-bold text-df">哥伦比亚（挂耳）</text>
								</view>
								<view class="margin-top-xs">
									<text class="bg-gray radius  text-xs margin-right-sm 	" style="padding:2px 3px;margin-top: 20px;">巧克力</text>
									<text class="bg-gray radius  text-xs margin-right-sm  " style="padding:2px 3px;margin-top: 20px;">巧克力</text>
									<text class="bg-gray radius  text-xs margin-right-sm  " style="padding:2px 3px;margin-top: 20px;">巧克力</text>						
								</view>
								<view class="text-gray text-xs margin-top-xs">
									月销售234
								</view>
								<view class="margin-top-xs flex justify-between align-center">
									<view class="text-red text-lg">
										<text class="text-price"></text>666
									</view>
									<view style="position:relative">
										<button class="cu-btn round bg-yellow text-white sm" @click="openDetail()">选规格</button>
										<view class="cu-tag badge">99+</view>										
									</view>
								</view>
							</view>							
						</view>
					</view>				
				</view>
				
				<view class="pg-space-xxl"></view>
				<view class="pg-space-xxl"></view>
			</scroll-view>
		</view>
		
		
		
		<view class="bg-white cu-list menu-avatar" style="position: fixed; bottom:0px; left: 0; right: 0;">
			<view class="cu-item" >
				<view class="cu-avatar round lg " @click="openBill()"> 
					<view  style="position:relative">
						<image src='/static/images/icon/my.png'
							class="cu-avatar  lg  " 
							style="background-color:#ffffff"
							></image>
							
						<view class="cu-tag badge">3</view>
					</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-bold text-xl text-red">
							<text class="text-price "></text>666
						</view>
					</view>
					<!-- <view class="text-gray text-sm flex">
						<text class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							顺风专送 | 免配送费 | 支持自取
						</text>
					 </view> -->
					 
					 <view class="text-gray text-sm flex align-center">
					 	<image src='/static/sf.png'
					 		class="cu-avatar radius lg  bg-gray margin-right-sm" 
					 		style="width: 23px;height: 23px;"
					 		></image>
					 	顺风专送 | 支持自取
					  </view>
				</view>
				<view class="">
						<button class='cu-btn round bg-yellow text-white shadow margin-right-sm' @click="toPay()">去结算</button>	
				</view>
			</view>
		</view>
			
			
		<!-- 详情选项 -->
		<view :class="['cu-modal', showDetail?'show':'']" >
			<view class="cu-dialog" :style="' position: absolute;top:'+ (CustomBar ) +'px;bottom:15px;left: 15px;right: 15px;'">
				<view class="cu-bar bg-white justify-end">
				  <view class="content text-bold">咖啡</view>
				  <view class="action" @click="closeShow()">
						<text class="cuIcon-close text-red"></text>
				  </view>
				 </view>
				 <!--height: calc(100vh - 150px - 105px -36px); -->
				 
				 <!-- 
					:style="'width: 100%;height: calc(100vh - 50px - 105px - 36px - 30px - ' + CustomBar + 'px)'"> -->
				<scroll-view 
					scroll-y scroll-with-animation 
					:style="'width: 100%;height: calc(100vh - 50px - 100px - 30px - ' + CustomBar + 'px)'">
					<view class="">
						<image src="/static/images/strong/swiper.jpg" class="block " style="width: 100%;"  mode="widthFix"></image>
					</view>
					<view class="padding-lr margin-top">
						<view class="flex flex-start">
							<text class="bg-gray radius  text-xs margin-right-sm padding-xs" >巧克力</text>
							<text class="bg-gray radius  text-xs margin-right-sm  padding-xs " >巧克力</text>							
						</view>
						<view class="flex flex-start margin-top-sm">
							<text class="text-gray radius  text-sm  text-left" >500ml的果肉，包含ml的果肉，包含ml的果肉，包含ml的果肉，包含ml的果肉，包含ml的果肉，包含ml的果肉，包含ml的果肉，包含</text>					
						</view>
					</view>
					<view class="padding-lr margin-top ">
						<view class="flex flex-start margin-top-sm">
							<text class="text-gray radius  text-sm  text-left" >口味 </text>					
						</view>
						<view class="flex flex-start margin-top-sm flex-wrap">
							<text  class="cu-btn  radius bg-yellow text-white   text-sm  text-center margin-right-sm" @click="chooseCategory()">口味 </text>		
							<text  class="cu-btn text-gray radius  text-sm  text-center margin-right-sm" >口味 </text>		
							<text  class="cu-btn text-gray radius  text-sm  text-center margin-right-sm" >口味 </text>		
							<text  class="cu-btn text-gray radius  text-sm  text-center margin-right-sm" >口味 </text>					
						</view>
					</view>
					<view class="pg-space-xxl"></view>
				</scroll-view>
				<view class="bg-white" style="position: absolute ;bottom: 0; left: 0;right: 0;">
					<view class="padding-lr padding-tb-sm  bg-gray">
						<view class="flex flex-start text-sm align-center">		
							<text class="text-gray ">已选规格：</text>已经选择规格						
						</view>					
					</view>
					
					<view class="padding ">
						<view class="flex justify-between align-center text-xxl">						
							<view class="text-red ">
								<text class="text-price"></text>666
							</view>				
							<view class="flex justify-between align-center">
								<button class="cu-btn  round  bg-gray sm "  @click="cutItem()">-</button>
								<text class="padding-lr-sm">1</text>
								<button class="cu-btn  round bg-yellow text-white sm" @click="addItem()">+</button>
							</view>						
						</view>
						<view class="margin-top-sm">
							<button class="cu-btn block round bg-yellow text-white lg" @click="confirmDetail()">选择</button>
						</view>
					</view>
				</view>
			</view>
		</view>


		<view :class="['cu-modal', showBill?'show':'']" >
			<view class="cu-dialog" style=" position: relative;">
				<view class="cu-bar bg-white justify-end">
				  <view class="content text-bold">当前订单</view>
				  <view class="action" @click="closeShow()">
						<text class="cuIcon-close text-red"></text>
				  </view>
				</view>
				
				<view class="cu-list menu bg-white">
					<view class="cu-item margin-tb-sm">
						<view class="action">
							<image src='/static/images/strong/swiper.jpg' 
								class="cu-avatar radius lg  bg-gray margin-right-sm " 
								style="width:60px;height:60px"
								></image>
						</view>
						<view class="content ">
							<view class="text-black text-left">挂耳包</view>
							<view class="text-gray  text-sm text-left">(加冰)</view>
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
						<view class="content ">
							<view class="text-black text-left">挂耳包</view>
							<view class="text-gray  text-sm text-left">(加冰)</view>
						</view>
						<view class="action">
							<view class="text-gray   text-sm">x1</view>
						</view>
					</view>
				</view>
						
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @click="closeShow()">取消</button>
						<button class="cu-btn bg-green margin-left" @click="closeShow()">确定</button>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar:this.CustomBar,
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				
				showDetail:false, //展示详情
				showBill:false, // 展示账单
				
				userInfo: {
					id: '202232',
					name: '',
					logo:"http://192.168.200.103:8083/wm_order_uni/static/images/strong/swiper.jpg",
					allScoreNum: 1,
					allPrizeNum: 1,
					allStoreNum: 1,
				},
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			// let list = [{}];
			// for (let i = 0; i < 4; i++) {
			// 	list[i] = {};
			// 	list[i].name = String.fromCharCode(65 + i);
			// 	list[i].id = i;
			// }
			
			let list = [
				{name:"热销",id:0},
				{name:"下午茶",id:1	},
				{name:"拿铁",id:2},
				{name:"美式",id:3},
			]
			
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			
			
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}	
			},
			
			/*************模态框**************/
			
			// 展示产品详情
			openDetail(){
				this.setData({
					showDetail:true,
				})				
			},
			// 确定订单
			confirmDetail(){
				
				this.setData({
					showDetail:false,
				})		
			},
			
			// 展示订单
			openBill(){
				this.setData({
					showBill:true,
				})
			},
			// 关闭模态框
			closeShow(){
				this.setData({
					showDetail:false,
					showBill:false,
				})
			},
			
			/***********详情操作*********/
			chooseCategory(e){
				console.log("选择分类")
			},
			// 增加数量
			addItem(){
				console.log("+")
				
			},
			// 减少数量
			cutItem(){
				console.log("-")
				
			},
			
			/******路由******/
			toPay(){
				uni.navigateTo({
					url:"/pages/order/pay"
				})
			},
			
			
		},
	}
</script>

<style>
	page{
	/* background-color: var(--ghostWhite); */
		/* background-color: #fafafa; */
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		/* background-color: #fff; */
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		/* background-color: #f1f1f1; */
		background-color: #ffffff;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		/* background-color: #f1f1f1; */
		background-color: --var(ghostWhite);
		flex: 1;
	}
	
	.cu-item:after{border: none !important;}
</style>

<!-- 
<view class="cu-list menu-avatar">
	<view class="cu-item">
		<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
		<view class="content">
			<view class="text-grey">凯尔</view>
			<view class="text-gray text-sm flex">
				<text class="text-cut">
					<text class="cuIcon-infofill text-red  margin-right-xs"></text>
					我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
				</text> </view>
		</view>
		<view class="action">
			<view class="text-grey text-xs">22:20</view>
			<view class="cu-tag round bg-grey sm">5</view>
		</view>
	</view>
	<view class="cu-item">
		<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
			<view class="cu-tag badge">99+</view>
		</view>
		<view class="content">
			<view class="text-grey">
				<text class="text-cut">瓦洛兰之盾-塔里克</text>
				<view class="cu-tag round bg-orange sm">战士</view>
			</view>
			<view class="text-gray text-sm flex">
				<text class="text-cut">
					塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
				</text>
			</view>
		</view>
		<view class="action">
			<view class="text-grey text-xs">22:20</view>
			<view class="cuIcon-notice_forbid_fill text-gray"></view>
		</view>
	</view>
	<view class="cu-item ">
		<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
		<view class="content">
			<view class="text-pink"><text class="text-cut">莫甘娜</text></view>
			<view class="text-gray text-sm flex"> <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text></view>
		</view>
		<view class="action">
			<view class="text-grey text-xs">22:20</view>
			<view class="cu-tag round bg-red sm">5</view>
		</view>
	</view>
	<view class="cu-item grayscale">
		<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
		<view class="content">
			<view><text class="text-cut">伊泽瑞尔</text>
				<view class="cu-tag round bg-orange sm">断开连接...</view>
			</view>
			<view class="text-gray text-sm flex"> <text class="text-cut"> 等我回来一个打十个</text></view>
		</view>
		<view class="action">
			<view class="text-grey text-xs">22:20</view>
			<view class="cu-tag round bg-red sm">5</view>
		</view>
	</view>
	<view class="cu-item cur">
		<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
			<view class="cu-tag badge"></view>
		</view>
		<view class="content">
			<view>
				<text class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</text>
				<view class="cu-tag round bg-orange sm">6人</view>
			</view>
			<view class="text-gray text-sm flex">
				<text class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</text></view>
		</view>
		<view class="action">
			<view class="text-grey text-xs">22:20</view>
			<view class="cuIcon-notice_forbid_fill text-gray"></view>
		</view>
	</view> -->