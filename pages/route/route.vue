<template>
	<view class="flex align-center  box" :style="'background-color:' + bgColor">
		<image class="cover" src="../../static/images/strong/loading.jpg" mode="widthFix"></image>
		<view class="flex justify-center " style="position: fixed; bottom: 20px;left: 0;right: 0;" >
			<button class="cu-btn line-gray round" @click="clickTo">
				点击进入
			</button>
		</view>
		
	</view>
</template>

<script>
		export default{
			data(){
				return{
					bgColor:"#fef4ea",
					ShopId:"",
					ShopTakeType:"",
				}
			},
			onLoad(options){
				console.log(options)
				
				// var storeId = options.store_id || ""
				this.setData({
					ShopId : options.store_id || ""
				})
				// var customerTakeType = options.type || ""
				// this.customerTakeType = options.type || 2
				uni.setStorageSync(this.db.KEY_SHOP_TAKE_TYPE ,options.type || "")
				
				// setTimeout(function(){					
				// 	uni.redirectTo({
				// 		url: '/pages/index/index'
				// 	});				
				// },1500)
				
				
				// console.log(options)
				// var ShopId = options.ShopId || ""
				// var ShopTakeType = options.ShopTakeType || ""
				// this.setData({
				// 	ShopId: ShopId,
				// 	ShopTakeType:ShopTakeType,
				// })
				
				// uni.setStorageSync(this.db.KEY_SHOP_ID ,ShopId )
				// uni.setStorageSync(this.db.KEY_SHOP_TAKE_TYPE ,ShopTakeType )
								
				this.onInit()
			},
			methods:{
				clickTo(){
					uni.redirectTo({
						url: '/pages/index/index'
					});
				},
				async onInit(){
					// return
					var res = await this.db.customerGetToken()
					console.log('get token',res)
					
					var that = this
					if(that.$data.ShopId == ""){
						console.log('ShopId is null')
						uni.redirectTo({
							url: '/pages/index/index'
						});
						
					}
					
					else {
						that.db.storeCurrent({
							shopId:that.$data.ShopId
						}).then(res=>{
							console.log('storeCurrent' , res)
							uni.setStorageSync(that.db.KEY_SHOP_NAME , res.data.Hosts)
							uni.switchTab({
								url:"/pages/menu/menu?ShopId=" + that.$data.ShopId
							})
						}).catch(res =>{
							console.log('catch' , res)
							uni.redirectTo({
								url: '/pages/index/index'
							});
						})					
					}		
					
					
					// var that = this
					// setTimeout(function(){
					// 	// debugger
					// 	if(that.$data.ShopId == "")
					// 		uni.redirectTo({
					// 			url: '/pages/index/index'
					// 		});
					// 	else {
					// 		that.db.storeCurrent({
					// 			shopId:that.$data.ShopId
					// 		}).then(res=>{
					// 			uni.setStorageSync(that.db.KEY_SHOP_NAME , res.data.Hosts)
					// 			uni.switchTab({
					// 				url:"/pages/menu/menu?ShopId=" + that.$data.ShopId
					// 			})
					// 		})							
					// 	}							
					// },1000)
					
					
					
				}
			}
		}
</script>

<style>
	.box {
		/* dis */
		width: 100%;
		height: 100vh;
		/* background-color: #fef4ea; */
	}
	.cover{
		width: 100%;
		display: block;
		
	}
</style>
