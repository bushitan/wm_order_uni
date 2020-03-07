<template>
	<view class="">
		<view class="" v-for="(item,key) in list">
			<view class="cu-bar bg-white  margin-top">
				<view class="action">
					<text class="cuIcon-title text-yellow"></text>{{item.name}} ，{{item.phoneNumber}}
				</view>
				<view class="action">
					<text class="cu-btn bg-red text-white round shadow margin-right-sm" @click="deleteAddress(key)">删除</text>
					<text class="cu-btn bg-yellow text-white round shadow " @click="select(key)">选择</text>
				</view>
			</view>
			<view class="title padding-lr padding-bottom  text-gray sm bg-white">{{item.cityName}}{{item.address}}</view>
		</view>
		<view class="padding">
			<button class="block bg-blue text-white round" @click="add()">新增</button>
		</view>
		<!-- id: 131
		email: "281256755@qq.com"
		company: "广西索骏科技有限责任公司"
		stateCode: ""
		stateProvinceName: ""
		cityCode: ""
		cityName: "南宁"
		address: "广西南宁青秀区 盛天国际"
		zipPostalCode: "530000"
		phoneNumber: "18588276558"
		faxNumber: "07713212955"
		name: null
		Longitude: ""
		Latitude: "" -->
		
		
		<view :class="['cu-modal', showEdt?'show':'']" >
			<view class="cu-dialog" style=" position: relative;">
				<view class="cu-bar bg-white justify-end">
				  <view class="content text-bold">编辑地址</view>
				  <view class="action" @click="close()">
						<text class="cuIcon-close text-red"></text>
				  </view>
				</view>
				
				<!-- <view class=" padding text-left">
					<textarea placeholder="智能识别地址(地址、姓名、电话请用空格分开)" ></textarea>
				</view>
				<view class="cu-form-group flex justify-end"> 
					<button class="cu-btn round ">识别</button>
				</view> -->
				<form  @submit="formSubmit">
					<view class="cu-form-group  text-left">
						<view class="title">城市：</view>
						<input placeholder="请输入城市名称" name="cityName" ></input>
					</view>
					<view class="cu-form-group  text-left">
						<view class="title">地址：</view>
						<input placeholder="请输入地址" name="address"></input>
					</view>
					
					<view class="cu-form-group  text-left">
						<view class="title">姓名：</view>
						<input placeholder="请输入姓名" name="name"></input>
					</view>
					
					<view class="cu-form-group  text-left">
						<view class="title">电话：</view>
						<input placeholder="请输入电话" name="phoneNumber"></input>
					</view>
					
					<view class="cu-bar bg-white justify-end">
						<view class="action">
							<button class="cu-btn line-green text-green" @click="close()">取消</button>
							<button class="cu-btn bg-green margin-left"  form-type="submit" >确定</button>
						</view>
					</view>
				</form>		
			<!-- 	<view class="cu-list menu bg-white">
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
				</view> -->
						
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				showEdt:false,
				list:[],
			}
		},
		onLoad(){
			this.onInit()
		},
		
		methods:{
			async onInit(){
				// var list = [
				// 	{ address:"2idsado",name:"我的", phone:"157778545"},
				// ]
				var res = await this.db.customerShipAddrs()
				console.log(res)
				this.setData({
					list:res.data
				})
			},
			select(index){
				var currentAdd = this.$data.list[index]
				var prePage = getCurrentPages()[ getCurrentPages().length - 2] 
				var order = prePage.$data.order
				// debugger
				prePage.setData({
					ReciveAddress : currentAdd.address,
					ReciveName : currentAdd.name,
					RecivePhone : currentAdd.phoneNumber,
					ReciveCityName : currentAdd.cityName,
				})
				// if(prePage.hasOwnProperty("getSFPreOrder"))
				prePage.getSFPreOrder()
				uni.navigateBack({})
			},
			
			
			add(){
				
				this.show()
			},
			
			// 删除地址
			deleteAddress(){
				uni.showModal({
					title:"是否删除该地址？"
				})
			},
			
			// 添加地址成功
			async formSubmit(e){
				var formData = e.detail.value
				// console.log(e)
				
				var  info = {
					address:formData.address,
					name:formData.name,
					phoneNumber:formData.phoneNumber,
					cityName:formData.cityName,
				}
				// TODO  上传地址
				var res = await this.db.customerAddShipAddr(info)
				this.onInit()
				this.close()
			},
						
			// 打开模态框
			show(){
				this.setData({
					showEdt:true,
				})
			},
			
			// 关闭模态框
			close(){
				this.setData({
					showEdt:false,
				})
			},
		},
	}
</script>

<style>
</style>
