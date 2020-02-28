import Vue from 'vue'
import App from './App'

import DB from './db/db.js'

Vue.config.productionTip = false

Vue.prototype.db = DB


import cuCustom from './components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 选择框
import tabbar from '@/components/tabbar/tabbar.vue'
Vue.component('tabbar', tabbar)


function setData(obj){  
	let that = this;  
	let keys = [];  
	let val,data;  
	Object.keys(obj).forEach(function(key){  
		 keys = key.split('.');  
		 val = obj[key];  
		 data = that.$data;  
		 keys.forEach(function(key2,index){  
			 if(index+1 == keys.length){  
				 that.$set(data,key2,val);  
			 }else{  
				 if(!data[key2]){  
					that.$set(data,key2,{});  
				 }  
			 }  
			 data = data[key2];  
		 })  
	});  
}  
Vue.prototype.setData = setData



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
